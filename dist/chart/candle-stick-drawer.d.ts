import { MovableRange } from '../algorithm/range';
import { Chart, YAxisDetail } from './chart';
import { CandleStickData } from './data-structure';
import { Drawer, DrawerOptions } from './drawer';
export declare class CandleStickDrawer extends Drawer {
    range: MovableRange<CandleStickData>;
    constructor(chart: Chart, options: DrawerOptions);
    count(): number;
    topValue: () => number;
    bottomValue: () => number;
    setRange(range: MovableRange<CandleStickData>): void;
    getYAxisDetail(y: number): YAxisDetail;
    getXAxisDetail(i: number): string;
    protected draw(): void;
    protected drawXAxis(): void;
    protected xTickFormatter(i: number, data: CandleStickData[]): string;
    protected xTickFormat(): string;
    protected xTickDetailFormatter(i: number, data: CandleStickData[]): string;
    protected xTickDetailFormat(): string;
    protected drawAxes(): void;
    protected drawCandles(): void;
}
