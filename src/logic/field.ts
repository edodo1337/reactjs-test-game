import { IGameField } from "./interfaces";
import { Cell } from "./types";


class GameField implements IGameField {
    private field: Cell[][];
    private colsNum: number;
    private rowsNum: number;
    private activeCellsCount: number;
    private correctSequence: Cell[];

    constructor(colsNum: number, rowsNum: number, activeCellsCount: number) {
        if (colsNum === 0 || rowsNum === 0 || activeCellsCount === 0) {
            throw "Empty square array or cells count is not allowed."
        }

        var squaresField = Array(rowsNum)
            .fill(null).map(
                () => Array(colsNum).fill(null).map(() => new Cell(0, 0))
            );

        this.field = squaresField;
        this.rowsNum = squaresField.length;
        this.colsNum = squaresField[0].length;
        this.activeCellsCount = activeCellsCount;
        this.correctSequence = [];
    }

    randomizeCells() {
        console.log("Randomize");

        this.correctSequence = [];

        const activeCellsCounters = Array.from(
            { length: this.activeCellsCount },
            () => Math.floor(Math.random() * this.colsNum * this.rowsNum)
        );

        this.field = new Array(this.rowsNum)
            .fill(null).map(
                () => Array(this.colsNum).fill(null).map(() => new Cell(0, 0))
            );

        activeCellsCounters.forEach((value, ind) => {
            const row = Math.floor(value / this.rowsNum);
            const col = value % this.colsNum;
            var cell = new Cell(value, ind + 1);

            this.field[row][col] = cell;
            this.correctSequence.push(cell);
        }
        );
    }

    checkStep(stepNum: number, value: number): boolean {
        if (stepNum < 0 || stepNum >= this.activeCellsCount) {
            throw "Check step values is not correct."
        }

        console.log("Expected", this.correctSequence[stepNum].value);
        console.log("Received", value);

        return this.correctSequence[stepNum].value === value ? true : false;
    }

    getCorrectSequence(): Cell[] {
        return this.correctSequence;
    }

    getSquaresField(): Cell[][] {
        return this.field;
    }

}


export { GameField };