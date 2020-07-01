import { Rect } from '../graphic/primitive';
export declare class ChartTitle {
    context: CanvasRenderingContext2D;
    title: string;
    labels: Array<{
        label: string;
        color: string;
    }>;
    background: string;
    titleColor: string;
    resolution: number;
    constructor(context: CanvasRenderingContext2D, title: string, labels: Array<{
        label: string;
        color: string;
    }>, background?: string, titleColor?: string, resolution?: number);
    setLabel(i: number, label: string): void;
    draw(frame: Rect): void;
}
