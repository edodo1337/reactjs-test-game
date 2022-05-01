import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { SquaresRow } from './SquareRow';
import { GameField } from './GameField';
import { GameContext } from './GameStore';

interface ContentProps {
    // gameStore: GameStore;
}

const Content: React.FC<ContentProps> = observer((props: ContentProps) => {
    const gameStore = useContext(GameContext);

    const squaresField = gameStore.game.fsm.getSquaresField().map((row, ind) =>
        <SquaresRow key={ind} squares={row} display={gameStore.display} gameIsRunning={gameStore.gameIsRunning} />
    );

    return (
        <div className='content'>
            {/* Hello {gameStore.flag} */}
            <GameField squareField={squaresField} />
        </div>
    );
});

export { Content };