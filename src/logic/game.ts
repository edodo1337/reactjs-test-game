import { GameFSM } from "./fsm";
import { IGameFSM } from "./interfaces";

/** Maing game logic entrypoint */
class Game {
    private static __existGame: Game | null = null;
    public winsCount: number;
    public losesCount: number;
    public fsm: IGameFSM;

    private constructor(colsNum: number, rowsNum: number, stepsCount: number) {
        this.winsCount = 0;
        this.losesCount = 0;

        this.fsm = new GameFSM(colsNum, rowsNum, stepsCount);
    }

    static NewGame(colsNum: number, rowsNum: number, stepsCount: number): Game {
        if (Game.__existGame !== null) {
            return Game.__existGame
        }
        if (colsNum === 0 || rowsNum === 0 || stepsCount === 0) {
            throw "Empty square array or cells count is not allowed."
        }

        const game = new Game(colsNum, rowsNum, stepsCount);

        return game;
    }
}

const COLS_NUM = 8;
const ROWS_NUM = 8;
const CELLS_COUNT = 7;


const GameLogic = Game.NewGame(COLS_NUM, ROWS_NUM, CELLS_COUNT);


export { GameLogic, Game, COLS_NUM, ROWS_NUM, CELLS_COUNT };


