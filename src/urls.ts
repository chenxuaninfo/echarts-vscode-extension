/**
 * @file option description request url
 */

const ZH_HOST = 'https://echarts.apache.org/zh/documents/option-parts/';
const EN_HOST = 'https://echarts.apache.org/en/documents/option-parts/';
export const OPTION_OUTLINE = 'https://echarts.apache.org/zh/documents/option-parts/option-outline.json';

interface Url {
    [propName: string]: string;
}
interface Urls {
    [propName: string]: Url;
}

export const urls: Urls = {
    zh: {
        TITLE_URL: `${ZH_HOST}option.title.json?`,
        LEGEND_URL: `${ZH_HOST}option.legend.json?`,
        GRID_URL: `${ZH_HOST}option.grid.json`,
        XAXIS_URL: `${ZH_HOST}option.xAxis.json`,
        YAXIS_URL: `${ZH_HOST}option.yAxis.json`,
        POLAR_URL: `${ZH_HOST}option.polar.json`,
        RADIUSAXIS_URL: `${ZH_HOST}option.radiusAxis.json`,
        ANGLEAXIS_URL: `${ZH_HOST}option.angleAxis.json`,
        RADAR_URL: `${ZH_HOST}option.radar.json`,
        VISUALMAP: `${ZH_HOST}option.visualMap.json`,
        TOOLTIP_URL: `${ZH_HOST}option.tooltip.json`,
        AXISPOINTER_URL: `${ZH_HOST}option.axisPointer.json`,
        TOOLBOX_URL: `${ZH_HOST}option.toolbox.json`,
        BRUSH_URL: `${ZH_HOST}option.brush.json`,
        GEO_URL: `${ZH_HOST}option.geo.json`,
        PARALLEL_URL: `${ZH_HOST}option.parallel.json`,
        PARALLELAXIS_URL: `${ZH_HOST}option.parallelAxis.json`,
        SINGLEAXIS_URL: `${ZH_HOST}option.singleAxis.json`,
        TIMELINE_URL: `${ZH_HOST}option.timeline.json`,
        GRAPHIC_URL: `${ZH_HOST}option.graphic.json`,
        CALENDAR_URL: `${ZH_HOST}option.calendar.json`,
        DATASET_URL: `${ZH_HOST}option.dataset.json`,
        ARIA_URL: `${ZH_HOST}option.aria.json`,
        TEXTSTYLE_URL: `${ZH_HOST}option.textStyle.json`,
        VISUALMAP_CONTINUOUS_URL: `${ZH_HOST}option.visualMap-continuous.json`,
        VISUALMAP_PIECEWISE_URL: `${ZH_HOST}option.visualMap-piecewise.json`,
        DATAZOOM_INSIDE_URL: `${ZH_HOST}option.dataZoom-inside.json`,
        DATAZOOM_SLIDER_URL: `${ZH_HOST}option.dataZoom-slider.json`,
        SERIES_BAR_URL: `${ZH_HOST}option.series-bar.json`,
        SERIES_BOXPLOT_URL: `${ZH_HOST}option.series-boxplot.json`,
        SERIES_LINE_URL: `${ZH_HOST}option.series-line.json`,
        SERIES_LINES_URL: `${ZH_HOST}option.series-lines.json`,
        SERIES_PIE_URL: `${ZH_HOST}option.series-pie.json`,
        SERIES_SCATTER_URL: `${ZH_HOST}option.series-scatter.json`,
        SERIES_EFFECTSCATTER_URL: `${ZH_HOST}option.series-effectScatter.json`,
        SERIES_RADAR_URL: `${ZH_HOST}option.series-radar.json`,
        SERIES_TREE_URL: `${ZH_HOST}option.series-tree.json`,
        SERIES_TREEMAP_URL: `${ZH_HOST}option.series-treemap.json`,
        SERIES_SUNBURST_URL: `${ZH_HOST}option.series-sunburst.json`,
        SERIES_CANDLESTICK_URL: `${ZH_HOST}option.series-candlestick.json`,
        SERIES_HEATMAP_URL: `${ZH_HOST}option.series-heatmap.json`,
        SERIES_MAP_URL: `${ZH_HOST}option.series-map.json`,
        SERIES_PARALLEL_URL: `${ZH_HOST}option.series-parallel.json`,
        SERIES_GRAPH_URL: `${ZH_HOST}option.series-graph.json`,
        SERIES_SANKEY_URL: `${ZH_HOST}option.series-sankey.json`,
        SERIES_FUNNEL_URL: `${ZH_HOST}option.series-funnel.json`,
        SERIES_GAUGE_URL: `${ZH_HOST}option.series-gauge.json`,
        SERIES_PICTORIALBAR_URL: `${ZH_HOST}option.series-pictorialBar.json`,
        SERIES_THEMERIVER_URL: `${ZH_HOST}option.series-themeRiver.json`,
        SERIES_CUSTOM_URL: `${ZH_HOST}option.series-custom.json`,
    },
    en: {
        TITLE_URL: `${EN_HOST}option.title.json?`,
        LEGEND_URL: `${EN_HOST}option.legend.json?`,
        GRID_URL: `${EN_HOST}option.grid.json`,
        XAXIS_URL: `${EN_HOST}option.xAxis.json`,
        YAXIS_URL: `${EN_HOST}option.yAxis.json`,
        POLAR_URL: `${EN_HOST}option.polar.json`,
        RADIUSAXIS_URL: `${EN_HOST}option.radiusAxis.json`,
        ANGLEAXIS_URL: `${EN_HOST}option.angleAxis.json`,
        RADAR_URL: `${EN_HOST}option.radar.json`,
        VISUALMAP: `${EN_HOST}option.visualMap.json`,
        TOOLTIP_URL: `${EN_HOST}option.tooltip.json`,
        AXISPOINTER_URL: `${EN_HOST}option.axisPointer.json`,
        TOOLBOX_URL: `${EN_HOST}option.toolbox.json`,
        BRUSH_URL: `${EN_HOST}option.brush.json`,
        GEO_URL: `${EN_HOST}option.geo.json`,
        PARALLEL_URL: `${EN_HOST}option.parallel.json`,
        PARALLELAXIS_URL: `${EN_HOST}option.parallelAxis.json`,
        SINGLEAXIS_URL: `${EN_HOST}option.singleAxis.json`,
        TIMELINE_URL: `${EN_HOST}option.timeline.json`,
        GRAPHIC_URL: `${EN_HOST}option.graphic.json`,
        CALENDAR: `${EN_HOST}option.calendar.json`,
        DATASET_URL: `${EN_HOST}option.dataset.json`,
        ARIA_URL: `${EN_HOST}option.aria.json`,
        TEXTSTYLE_URL: `${EN_HOST}option.textStyle.json`,
        VISUALMAP_CONTINUOUS_URL: `${EN_HOST}option.visualMap-continuous.json`,
        VISUALMAP_PIECEWISE_URL: `${EN_HOST}option.visualMap-piecewise.json`,
        DATAZOOM_INSIDE_URL: `${EN_HOST}option.dataZoom-inside.json`,
        DATAZOOM_SLIDER_URL: `${EN_HOST}option.dataZoom-slider.json`,
        SERIES_BAR_URL: `${EN_HOST}option.series-bar.json`,
        SERIES_BOXPLOT_URL: `${EN_HOST}option.series-boxplot.json`,
        SERIES_LINE_URL: `${EN_HOST}option.series-line.json`,
        SERIES_LINES_URL: `${EN_HOST}option.series-lines.json`,
        SERIES_PIE_URL: `${EN_HOST}option.series-pie.json`,
        SERIES_SCATTER_URL: `${EN_HOST}option.series-scatter.json`,
        SERIES_EFFECTSCATTER_URL: `${EN_HOST}option.series-effectScatter.json`,
        SERIES_RADAR_URL: `${EN_HOST}option.series-radar.json`,
        SERIES_TREE_URL: `${EN_HOST}option.series-tree.json`,
        SERIES_TREEMAP_URL: `${EN_HOST}option.series-treemap.json`,
        SERIES_SUNBURST_URL: `${EN_HOST}option.series-sunburst.json`,
        SERIES_CANDLESTICK_URL: `${EN_HOST}option.series-candlestick.json`,
        SERIES_HEATMAP_URL: `${EN_HOST}option.series-heatmap.json`,
        SERIES_MAP_URL: `${EN_HOST}option.series-map.json`,
        SERIES_PARALLEL_URL: `${EN_HOST}option.series-parallel.json`,
        SERIES_GRAPH_URL: `${EN_HOST}option.series-graph.json`,
        SERIES_SANKEY_URL: `${EN_HOST}option.series-sankey.json`,
        SERIES_FUNNEL_URL: `${EN_HOST}option.series-funnel.json`,
        SERIES_GAUGE_URL: `${EN_HOST}option.series-gauge.json`,
        SERIES_PICTORIALBAR_URL: `${EN_HOST}option.series-pictorialBar.json`,
        SERIES_THEMERIVER_URL: `${EN_HOST}option.series-themeRiver.json`,
        SERIES_CUSTOM_URL: `${EN_HOST}option.series-custom.json`,
    }
};