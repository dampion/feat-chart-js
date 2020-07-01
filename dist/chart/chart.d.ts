import { ScaleLinear } from 'd3-scale';
import { MovableRange } from '../algorithm/range';
import { TradeTimeSegment } from '../algorithm/tradetime';
import { Drawer, DrawerContructor, DrawerOptions } from './drawer';
export interface YAxisDetail {
    left?: string;
    right: string;
}
export interface DrawerConfig {
    constructor: DrawerContructor;
    options?: DrawerOptions;
}
export interface ChartOptions {
    /**
     * Selector use in document.querySelector or an document element
     */
    selector: string | HTMLElement;
    lastPrice: number;
    data: any[];
    tradeTimes: TradeTimeSegment[];
    mainDrawer: DrawerConfig;
    theme?: ChartTheme;
    resolution?: number;
    count?: number;
    minCount?: number;
    maxCount?: number;
    mainRatio?: number;
    selectedAuxiliaryDrawer?: number;
    auxiliaryDrawers?: DrawerConfig[];
    detailProvider?: (selectedIndex: number, data: any[]) => {
        title: string;
        tables: ChartDetail[];
    };
    onMoreData?: (this: Chart, tep: number) => void | Promise<any[]>;
}
export interface ChartDetail {
    name: string;
    value: string;
    color: string;
}
export declare function autoResetStyle(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export declare function shouldRedraw(): (target: any, propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export interface ChartTheme {
    rise: string;
    fall: string;
    gridLine: string;
    yTick: string;
    xTick: string;
    frontSight: string;
    frontSightLabelBackground: string;
    background: string;
    detailColor: string;
    detailBackground: string;
    title: string;
    titleBackground: string;
    [key: string]: string | object;
}
export declare const ChartWhiteTheme: ChartTheme;
export declare const ChartBlackTheme: ChartTheme;
export declare class Chart {
    theme: ChartTheme;
    options: ChartOptions;
    requestAnimationFrameId: number;
    rootElement: HTMLElement;
    detailElement: HTMLElement;
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
    xScale: ScaleLinear<number, number>;
    width: number;
    height: number;
    mainDrawer: Drawer;
    auxiliaryDrawer: Drawer;
    selectedAuxiliaryDrawer: number;
    destroyed: boolean;
    movableRange: MovableRange<object>;
    /**
     * 昨收价
     */
    lastPrice: number;
    private detailPoint;
    private interactive;
    private touchTimeoutId;
    private lastMouseX;
    private lastMouseY;
    private lastPinchDistance;
    private hasMoved;
    private hasScale;
    private isDirty;
    private isFetchingMoreData;
    private noMoreData;
    constructor(options: ChartOptions);
    resize(redraw?: boolean): void;
    onWindownResize(): void;
    setData(data: any[], clean?: boolean): void;
    move(step: number): void;
    recenterVisibleArea(centerIndex: number, length: number): void;
    setLastPrice(value: number): void;
    count(): number;
    resetXScale(): void;
    drawAtEndOfFrame(): void;
    destroy(): void;
    nextMainExclusivePlugin(): void;
    useMainExclusivePlugin(index: number): void;
    nextAuxiliarDrawer(): void;
    useAuxiliarDrawer(index: number): void;
    readonly data: object[];
    readonly mainChartY: number;
    readonly mainChartHeight: number;
    readonly auxiliaryChartHeight: number;
    readonly auxiliaryChartY: number;
    /**
     * The distance of neighbor point
     */
    private readonly neighborDistance;
    private create;
    private createDrawers;
    private _createMainDrawer;
    private _createAuxiliaryDrawer;
    private destroyDrawer;
    private drawFrontSight;
    private listenEvents;
    private onTouchStart;
    private onPinch;
    private onScale;
    private onTouchMove;
    private onDrag;
    private onTouchEnd;
    private clearTouchTimeout;
    private onMouseDown;
    private onMouseUp;
    private onContextMenu;
    private onMouseEnter;
    private onMouseMove;
    private onMouseLeave;
    private onWheel;
    private showDetail;
    private detailAt;
    private forEachVisibleDrawer;
    private clampSelectedIndex;
    private drawDetail;
    private hideDetail;
    private _draw;
    private _resizeMainDrawer;
    private _resizeAuxiliaryDrawer;
    private drag;
    private getMoreData;
}
