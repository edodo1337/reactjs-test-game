import { Action, Cell, State } from "./types";

interface IGameField {
    randomizeCells(): void;
    checkStep(stepNum: number, value: number): boolean;
    getCorrectSequence(): Cell[];
    getSquaresField(): Cell[][];
}

interface IGameFSM {
    dispatch(action: Action): void;
    getSquaresField(): Cell[][];
    state: State;
}


export type { IGameField, IGameFSM };