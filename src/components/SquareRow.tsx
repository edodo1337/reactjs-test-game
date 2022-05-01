import React, { useEffect } from 'react';
import { Cell } from '../logic/types';
import { Square } from './Square';

interface SquaresRowProps {
    squares?: Cell[];
    display: boolean;
    gameIsRunning: boolean;
}

const SquaresRow: React.FC<SquaresRowProps> = (props: SquaresRowProps) => {
    const items = props.squares?.map((e, ind) =>
        <Square key={ind} value={e.value} orderNumber={e.orderNumber} display={props.display} gameIsRunning={props.gameIsRunning} />
    );


    useEffect(() => {
        console.log("Did mount here", props.display);
    }, []);

    return (
        <div className='squares-row'>
            {items}
        </div>
    );
}

export { SquaresRow };