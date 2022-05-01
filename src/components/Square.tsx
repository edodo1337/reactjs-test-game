import React, { useEffect, useState } from 'react';


interface SquareProps {
    value: number;
    orderNumber: number;
    display: boolean;
    gameIsRunning: boolean;
}

const Square: React.FC<SquareProps> = (props: SquareProps) => {
    const [state, setState] = useState({ display: props.display, className: 'square' });

    useEffect(() => {
        setState((state) => { return { display: props.display, className: state.className } });
    }, [props.display]);

    function squareClickHandler() {
        setState(({ display, className }) => {
            return {
                display: !display,
                className: className === 'square' ? 'square square-active' : 'square'
            }
        });
    }

    return (
        <div className={props.gameIsRunning ? state.className : state.className + ' no-click'} onClick={squareClickHandler}>
            {(props.orderNumber === 0 || !state.display) ? "" : props.orderNumber}
        </div>
    );
}

export { Square };
