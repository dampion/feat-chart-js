export interface TradeTimeSegment {
    open: number;
    close: number;
}
export declare class TradeTime {
    private tradeTimes;
    constructor(tradeTimes: TradeTimeSegment[]);
    getMinute(fromIndex: number): number;
    isTrading(minuteOffset: number): boolean;
    totalMinutes(): number;
}
