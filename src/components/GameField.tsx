import React from 'react';

interface GameFieldProps {
    squareField: React.ReactNode[];
}

const GameField: React.FC<GameFieldProps> = (props: GameFieldProps) => {
    return (
        <div className='game-field'>
            {props.squareField}
        </div>
    );
}


export { GameField };