/**
 * @file util functions
 */

import axios from 'axios';
import { urls, OPTION_OUTLINE } from './urls';
import { findNodeAround } from 'acorn-walk';
import {
    GetDataParams,
    Options,
    OptionsStruct,
    Node,
    Property,
    OptionsNameItem,
    isProperty,
    isLiteral,
    isArrayExpression,
    isObjectExpression
} from './type';

/**
 * series option is object, find which chart type it is
 * @param properties Object's properties
 */
function findChartTypeInObject(properties: Node[]): string {
    let chartType = '';
    for (let i = 0, len = properties.length; i < len; i++) {
        const property = properties[i];
        if (
            isProperty(property)
            && property.key.name === 'type'
            && isLiteral(property.value)
        ) {
            chartType = property.value.value;
        }
    }

    return chartType;
}

/**
 * series option is array, find input at which chart type
 * @param elements Array elements
 * @param position input postion
 */
function findChartTypeInArray(elements: Node[], position: number): string {
    for (let i = 0, len = elements.length; i < len; i++) {
        const element = elements[i];
        if (
            position >= element.start
            && position < element.end
            && isObjectExpression(element)
        ) {
            return findChartTypeInObject(element.properties);
        }
    }

    return '';
}

/**
 * Flatten object
 * @param optionChain chain of option names
 * @param children child options
 * @param optionsNames final result
 */
function flatObject(optionChain: string, children: OptionsNameItem[], optionsNames: OptionsStruct): void {
    children.map(item => {
        if (item.children) {
            flatObject(`${optionChain}.${item.prop || item.arrayItemType || ''}`, item.children, optionsNames);
        }

        if (!optionsNames[optionChain]) {
            optionsNames[optionChain] = [];
        }

        let type: string[] = [];
        item.type = item.type === '*' ? 'object' : (item.type ? item.type : typeof item.default);
        if (typeof item.type === 'string') {
            type = [item.type];
        }

        optionsNames[optionChain].push({
            name: item.prop || item.arrayItemType || '',
            type
        });
    });
}

/**
 * find out input at which chart type
 * @param values series option value
 * @param position input position
 */
export function findChartType(values: Property['value'], position: number): string {
    if (isObjectExpression(values)) {
        return findChartTypeInObject(values.properties);
    }

    if (isArrayExpression(values)) {
        return findChartTypeInArray(values.elements, position);
    }

    return '';
}

/**
 * Axios request
 * @param lang language
 * @param option option name
 * @param sendRequest send request to Apache api or not
 */
export async function getData({ lang, option, sendRequest = false }: GetDataParams): Promise<Options | undefined> {
    if (!sendRequest) {
        return;
    }

    const api = urls[lang][option];
    try {
        const res = await axios.get(api, {
            timeout: 2000
        });
        for (const key in res.data) {
            res.data[key] = res.data[key].replace(/<[^>]+>/g, '').trim();
        }
        return res.data;
    } catch (error) {
        console.error(`${error.code}, ${option}: `);
    }
}

/**
 * get option structure
 */
export async function getOptionsNames(): Promise<OptionsStruct | undefined> {
    try {
        const optionsNames: OptionsStruct = {};
        const res = await axios.get(OPTION_OUTLINE, {
            timeout: 10000
        });

        res.data.children.map((item: OptionsNameItem) => {
            if (item.children) {
                flatObject(item.prop || item.arrayItemType || '', item.children, optionsNames);
            }
        });

        return optionsNames;
    } catch (error) {
        console.error(`${error.code || error.message}, option name`);
    }

}

/**
 * Generate an arry from a-z
 */
export function generateAToZArray(): string[] {
    const arr: string[] = [];
    for (let i = 65; i <= 122; i++) {
        if (i > 90 && i < 97) {
            continue;
        }
        arr.push(String.fromCharCode(i));
    }

    return arr;
}

/**
 * find current node's ancestor nodes
 * @param ast AST tree
 * @param node current node
 */
export function walkNodeRecursive(ast: Node, node: Node, position: number): string {
    let nodes = '';
    if (isProperty(node)) {
        const prevNode = findNodeAround(ast, node.end + 1, 'Property');
        if (prevNode && isProperty(prevNode.node)) {
            if (prevNode.node.key.name === 'series') {
                prevNode.node.key.name += `.${findChartType(prevNode.node.value, position)}`;
            }
            nodes += prevNode.node.key.name;
            const prevNodeName = walkNodeRecursive(ast, prevNode.node, position) || '';
            return `${prevNodeName}${prevNodeName ? '.' : ''}${nodes}`;
        }
    }

    return nodes;
}