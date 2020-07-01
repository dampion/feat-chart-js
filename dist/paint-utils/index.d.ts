import 'core-js/modules/es6.object.assign';
import { ScaleLinear } from 'd3-scale';
import { Point, Rect } from '../graphic/primitive';
export declare function drawLine(ctx: CanvasRenderingContext2D, data: Point[], color?: string, lineWidth?: number): void;
export interface TextStyle {
    font?: string;
    color?: string;
}
export declare function drawText(ctx: CanvasRenderingContext2D, text: string, position?: Point, styles?: TextStyle): void;
export interface TickValueDescription {
    value: number;
    color?: string;
}
export declare function drawYAxis(ctx: CanvasRenderingContext2D, tickValues: TickValueDescription[], frame: Rect, scale: ScaleLinear<number, number>, resolution?: number, withLine?: boolean, lineColor?: string, formatter?: (v: number, i: number) => string, align?: 'left' | 'right'): void;
export declare function drawXAxis(ctx: CanvasRenderingContext2D, tickValues: number[], frame: Rect, scale: ScaleLinear<number, number>, resolution?: number, withTick?: boolean, lineColor?: string, formatter?: (v: number, i: number) => string, tickColor?: string): void;
