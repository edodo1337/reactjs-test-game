import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { GameFSM } from './logic/fsm';
import { ActionType, State } from './logic/types';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// test('test new game constructor', () => {
//   const game = Game.NewGame(10, 10, 10);

//   expect(game.rowsNum).toBe(10);
//   expect(game.colsNum).toBe(10);
//   expect(game.activeCellsCount).toBe(10);
// });


// test('test randomize method', () => {
//   const game = Game.NewGame(10, 10, 10);
//   game.randomizeCells();

//   var activeCellsCount = 0;

//   game.field.forEach((row) => {
//     row.forEach((cell) => {
//       activeCellsCount = (
//         ((cell.orderNumber !== 0) && (cell.value !== 0)) ? activeCellsCount + 1 : activeCellsCount
//       );
//     })
//   });

//   expect(activeCellsCount).toBe(10);
// });

test('test state machine start', () => {
  const fsm = new GameFSM(10, 10, 3);

  fsm.dispatch({ type: ActionType.Start });

  expect(fsm.currentState).toBe(State.InProgress);
});


test('test state machine win', () => {
  const fsm = new GameFSM(10, 10, 3);

  fsm.dispatch({ type: ActionType.Start });
  const correctSeq = fsm.field.getCorrectSequence();
  fsm.dispatch({ type: ActionType.Step, value: correctSeq[0].value });

  expect(fsm.currentState).toBe(State.InProgress);
});


test('test state machine win', () => {
  const fsm = new GameFSM(10, 10, 3);

  fsm.dispatch({ type: ActionType.Start });
  const correctSeq = fsm.field.getCorrectSequence();
  fsm.dispatch({ type: ActionType.Step, value: correctSeq[0].value });
  fsm.dispatch({ type: ActionType.Step, value: correctSeq[1].value });
  fsm.dispatch({ type: ActionType.Step, value: correctSeq[2].value });

  expect(fsm.currentState).toBe(State.Win);
});


test('test state machine lose', () => {
  const fsm = new GameFSM(10, 10, 3);

  fsm.dispatch({ type: ActionType.Start });
  fsm.dispatch({ type: ActionType.Step, value: 999 });

  expect(fsm.currentState).toBe(State.Lose);
});


test('test state machine start after win', () => {
  const fsm = new GameFSM(10, 10, 1);
  fsm.dispatch({ type: ActionType.Start });
  fsm.dispatch({ type: ActionType.Step, value: 1 });
  const oldCorrectSeq = [...fsm.field.getCorrectSequence()]

  fsm.dispatch({ type: ActionType.Start });

  expect(fsm.currentState).toBe(State.InProgress);
  expect(oldCorrectSeq.every(function (value, index) {
    return value === fsm.field.getCorrectSequence()[index]
  })).toBe(false);
});


test('test state machine start after lose', () => {
  const fsm = new GameFSM(10, 10, 1);
  fsm.dispatch({ type: ActionType.Start });
  const oldCorrectSeq = [...fsm.field.getCorrectSequence()]
  fsm.dispatch({ type: ActionType.Step, value: 2 });

  fsm.dispatch({ type: ActionType.Start });

  expect(fsm.currentState).toBe(State.InProgress);
  expect(oldCorrectSeq.every(function (value, index) {
    return value === fsm.field.getCorrectSequence()[index]
  })).toBe(false);
});

