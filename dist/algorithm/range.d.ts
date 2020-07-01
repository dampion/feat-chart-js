export declare class MovableRange<T> {
    data: T[];
    endPosition: number;
    visibleLength: number;
    constructor(data: T[], length: number);
    setData(data: T[]): void;
    setVisibleLength(length: number): void;
    visible(): T[];
    visibleStartIndex(): number;
    /**
     * move visible range
     * @param step move step
     * @returns return true when visibleRange moved
     */
    move(step: number): boolean;
    recenter(visibleIndex: number, length: number): void;
}
