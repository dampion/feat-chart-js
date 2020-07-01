import { MovableRange } from '../../algorithm/range';
import { Chart, ChartTheme, YAxisDetail } from '../chart';
import { ChartTitle } from '../chart-title';
import { CandleStickData, TimeSeriesData, VolumeData } from '../data-structure';
import { Drawer, DrawerOptions } from '../drawer';
export interface VolumeTheme extends ChartTheme {
    volume: {
        same: string;
        volumeText: string;
    };
}
export declare const VolumeWhiteTheme: {
    same: string;
    volumeText: string;
};
export declare const VolumeBlackTheme: {
    same: string;
    volumeText: string;
};
/**
 * Volume chart drawer
 */
export declare class VolumeDrawer extends Drawer {
    static proportion: number;
    static unit: string;
    theme: VolumeTheme;
    titleDrawer: ChartTitle;
    range: MovableRange<VolumeData>;
    constructor(chart: Chart, options: DrawerOptions);
    calcDeltaPrice(currentValue: object, currentIndex: number, data: object[]): number;
    setRange(range: MovableRange<VolumeData>): void;
    getYAxisDetail(y: number): YAxisDetail;
    protected draw(): void;
    protected drawAxes(): void;
    protected drawYAxis(): void;
    protected drawVolumes(): void;
    private drawTitle;
}
export declare class TimeSeriesVolumeDrawer extends VolumeDrawer {
    calcDeltaPrice(currentValue: TimeSeriesData, currentIndex: number, data: TimeSeriesData[]): number;
}
export declare class CandleStickVolumeDrawer extends VolumeDrawer {
    range: MovableRange<CandleStickData>;
    calcDeltaPrice(currentValue: CandleStickData, currentIndex: number): number;
}
