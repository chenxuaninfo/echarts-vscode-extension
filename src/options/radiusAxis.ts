/**
 * @file RadiusAxis component
 */

import {
    CompletionItem,
    CompletionItemKind,
    SnippetString
} from 'vscode';
import { getData } from '../utils';
import { Options, Item, Params } from '../type';

const radiusAxisOptionsName: string[] = [
    'id',
    'polarIndex',
    'type',
    'name',
    'nameLocation',
    'nameTextStyle',
    'nameGap',
    'nameRotate',
    'inverse',
    'boundaryGap',
    'min',
    'max',
    'scale',
    'splitNumber',
    'minInterval',
    'maxInterval',
    'interval',
    'logBase',
    'silent',
    'triggerEvent',
    'axisLine',
    'axisTick',
    'minorTick',
    'axisLabel',
    'splitLine',
    'minorSplitLine',
    'splitArea',
    'data',
    'axisPointer'
];

async function getRadiusAxisOptions({ lang, optionsName }: Params): Promise<Item> {
    const jsonData: Options | undefined = await getData({ lang, option: 'RADIUSAXIS_URL' });
    const item = optionsName.map((item: string) => {
        let completionItem: CompletionItem;
        let insertText: SnippetString;

        switch (item) {
            case 'axisLine':
            case 'axisTick':
            case 'minorTick':
            case 'axisLabel':
            case 'splitLine':
            case 'minorSplitLine':
            case 'splitArea':
            case 'axisPointer':
            case 'nameTextStyle':
                completionItem = new CompletionItem(item, CompletionItemKind.Struct);
                insertText = new SnippetString(`${item}: {$0\n},`);
                break;

            case 'data':
                completionItem = new CompletionItem(item, CompletionItemKind.Value);
                insertText = new SnippetString(`${item}: [$0]`);
                break;

            case 'center':
                completionItem = new CompletionItem(item, CompletionItemKind.Value);
                insertText = new SnippetString(`${item}: [ $0, ],`);
                break;

            case 'radius':
                completionItem = new CompletionItem(item, CompletionItemKind.Value);
                insertText = new SnippetString(`${item}: ,` + '${1|5,\'\',[ , ]|},');
                break;

            case 'inverse':
            case 'scale':
            case 'silent':
            case 'triggerEvent':
                completionItem = new CompletionItem(item, CompletionItemKind.EnumMember);
                insertText = new SnippetString(`${item}: ` + '${1|true,false|},');
                break;

            case 'boundaryGap':
                completionItem = new CompletionItem(item, CompletionItemKind.EnumMember);
                insertText = new SnippetString(`${item}: ` + '${1|true,false,[]|},');
                break;

            case 'min':
                completionItem = new CompletionItem(item, CompletionItemKind.EnumMember);
                insertText = new SnippetString(`${item}: ` + '${1|1,\'dataMin\',function (value) {}|},');
                break;
            case 'max':
                completionItem = new CompletionItem(item, CompletionItemKind.EnumMember);
                insertText = new SnippetString(`${item}: ` + '${1|1,\'dataMax\',function (value) {}|},');
                break;

            case 'polarIndex':
            case 'nameGap':
            case 'nameRotate':
            case 'zlevel':
            case 'z':
            case 'splitNumber':
            case 'minInterval':
            case 'maxInterval':
            case 'interval':
            case 'logBase':
                completionItem = new CompletionItem(item, CompletionItemKind.Value);
                insertText = new SnippetString(`${item}: $0,`);
                break;

            case 'type':
                completionItem = new CompletionItem(item, CompletionItemKind.Enum);
                insertText = new SnippetString(`${item}: ` + '\'${1|value,category,time,log|}\',');
                break;

            case 'nameLocation':
                completionItem = new CompletionItem(item, CompletionItemKind.Enum);
                insertText = new SnippetString(`${item}: ` + '\'${1|start,middle,center,end|}\',');
                break;

            default:
                completionItem = new CompletionItem(item, CompletionItemKind.Text);
                insertText = new SnippetString(`${item}: '$0',`);
        }

        completionItem.insertText = insertText;
        completionItem.documentation = jsonData && jsonData[item];
        // completionItem.label = 'radiusAxis';
        return completionItem;
    });

    return {
        id: 'radiusAxis',
        item
    };
}

export default getRadiusAxisOptions;