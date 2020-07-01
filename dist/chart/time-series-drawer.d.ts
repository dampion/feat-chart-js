import { MovableRange } from '../algorithm/range';
import { Chart, ChartTheme, YAxisDetail } from './chart';
import { ChartTitle } from './chart-title';
import { TimeSeriesData } from './data-structure';
import { Drawer, DrawerOptions } from './drawer';
export interface TimeSeriesTheme extends ChartTheme {
    TimeSeries: {
        price: string;
        linearGradient: string[];
        avg: string;
    };
}
export declare const TimeSeriesWhiteTheme: {
    price: string;
    linearGradient: string[];
    avg: string;
};
export declare const TimeSeriesBlackTheme: {
    price: string;
    linearGradient: string[];
    avg: string;
};
export declare class TimeSeriesDrawer extends Drawer {
    static precision: number;
    theme: TimeSeriesTheme;
    titleDrawer: ChartTitle;
    range: MovableRange<TimeSeriesData>;
    canScale: boolean;
    topValue: () => number;
    bottomValue: () => number;
    constructor(chart: Chart, options: DrawerOptions);
    count(): number;
    setRange(range: MovableRange<TimeSeriesData>): void;
    drawFrontSight(): void;
    getYAxisDetail(y: number): YAxisDetail;
    getXAxisDetail(i: number): string;
    protected draw(): void;
    protected xTickFormatter(value: number, i?: number): string;
    protected drawYAxis(): void;
    protected deltaInPercentage(value: number): string;
    protected drawXAxis(): void;
    protected drawAxes(): void;
    protected drawTimeSeries(): void;
    protected drawLine(key: keyof TimeSeriesData, color?: string): void;
}
