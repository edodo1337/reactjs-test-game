import { createContext } from 'react';
import { Game, GameLogic } from '../logic/game';
import { ActionType, State } from '../logic/types';
import { makeAutoObservable } from 'mobx';

class GameStore {
    game: Game = GameLogic;
    display: boolean = false;
    gameIsRunning: boolean = false;

    constructor() {
        makeAutoObservable(this);
    }

    start() {
        this.game.fsm.dispatch({ type: ActionType.Start })
        this.display = this.isDisplayed();
        this.gameIsRunning = this.isGameRunning();
    }

    hide() {
        this.game.fsm.dispatch({ type: ActionType.Hide })
        this.display = this.isDisplayed();
        this.gameIsRunning = this.isGameRunning();
    }

    isDisplayed() {
        return this.game.fsm.state === State.Prepare;
    }

    isGameRunning() {
        return this.game.fsm.state === State.InProgress;
    }

}

const defaultGameStore = new GameStore();
const GameContext = createContext<GameStore>(defaultGameStore);


export { GameContext, GameStore, defaultGameStore };