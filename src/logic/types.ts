
enum State {
    Init = 1,
    Prepare,
    InProgress,
    Win,
    Lose,
}

type Action =
    | Start
    | Hide
    | Step
    | WinStop
    | LoseStop

enum ActionType {
    Start = 1,
    Hide,
    Step,
    WinStop,
    LoseStop,
}

type Start = {
    readonly type: ActionType.Start;
}

type Hide = {
    readonly type: ActionType.Hide;
}

type Step = {
    readonly type: ActionType.Step;
    value: number;
}

type WinStop = {
    readonly type: ActionType.WinStop;
}

type LoseStop = {
    readonly type: ActionType.LoseStop;
}

/** Square field entity */
class Cell {
    value: number;
    orderNumber: number;

    constructor(value: number, orderNumber: number) {
        this.value = value;
        this.orderNumber = orderNumber;
    }
}

export { State, ActionType, Cell };
export type { Action, Start, Step, WinStop, LoseStop };
