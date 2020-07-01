import { ExclusiveDrawerPluginConstructor } from '../chart/drawer-plugin';
export interface DatumColorMap {
    key: string;
    color: string;
}
export interface TitleBarTheme {
    title: string;
    background: string;
}
export declare function createLinePlugin(config: {
    dataObjectKey: string;
    title: string;
    lineData: DatumColorMap[];
    detailMapper: (key: string, datum: number, index: number) => string;
}): ExclusiveDrawerPluginConstructor;
