import { GameField } from "./field";
import { IGameField } from "./interfaces";
import { Action, ActionType, Cell, State } from "./types";


/** State Machine */
class GameFSM {
    private _currentState: State;
    private currentStep: number;
    private stepsCount: number;
    private _field: IGameField;

    public get field(): IGameField {
        return this._field;
    }

    public get currentState(): State {
        return this._currentState;
    }

    constructor(colsNum: number, rowsNum: number, stepsCount: number) {
        this._currentState = State.Init;
        this.currentStep = 0;
        this.stepsCount = stepsCount;

        if (colsNum === 0 || rowsNum === 0 || stepsCount === 0) {
            throw "Empty square array or cells count is not allowed."
        }
        this.stepsCount = stepsCount;
        this._field = new GameField(colsNum, rowsNum, stepsCount);
    }

    /** FSM entrypoint */
    dispatch(action: Action) {
        switch (this.currentState) {
            case State.Init: this.initHandler(action); break;
            case State.Prepare: this.prepareHandler(action); break;
            case State.InProgress: this.inProgressHandler(action); break;
            case State.Lose: this.loseHandler(action); break;
            case State.Win: this.winHandler(action); break;
            default:
        }
    }

    get state() {
        return this._currentState;
    }

    // <Transition handlers
    initHandler(action: Action) {
        console.log("Init handler")
        switch (action.type) {
            case ActionType.Start:
                console.log("From init to prepare!");
                this._currentState = State.Prepare;
                this._field.randomizeCells();
                break;
            default:
        }
    }

    prepareHandler(action: Action) {
        console.log("Prepare handler")
        switch (action.type) {
            case ActionType.Hide:
                console.log("From start to inProgress!");
                this._currentState = State.InProgress;
                break;
            default:
        }
    }

    inProgressHandler(action: Action) {
        console.log("In progress handler");
        switch (action.type) {
            case ActionType.Step:
                console.log("In progress step!");

                if (this._field.checkStep(this.currentStep, action.value)) {
                    console.log("Correct!");
                    this.currentStep++;
                    if (this.currentStep >= this.stepsCount) {

                        this._currentState = State.Win;
                        this.dispatch({
                            type: ActionType.WinStop
                        })
                    }
                } else {
                    console.log("Not correct!");

                    this._currentState = State.Lose;
                    this.dispatch({
                        type: ActionType.LoseStop
                    });
                }

                break;
            default:
        }
    }

    loseHandler(action: Action) {
        console.log("Lose handler");
        switch (action.type) {
            case ActionType.Start:
                this._currentState = State.Init;
                this.dispatch(action);
                break;

            default:
        }
    }

    winHandler(action: Action) {
        console.log("Win handler");
        switch (action.type) {
            case ActionType.Start:
                this._currentState = State.Init;
                this.dispatch(action);
                break;

            default:
        }
    }
    // Transition handlers />

    getSquaresField(): Cell[][] {
        return this.field.getSquaresField();
    }
}



export { GameFSM };
