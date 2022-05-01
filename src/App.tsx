import './App.css';
import { State } from './logic/types';
import { MainPage } from './components/MainPage';
import { defaultGameStore, GameContext } from './components/GameStore';

function App() {
  return (
    <GameContext.Provider value={defaultGameStore}>
      <MainPage />
      <button onClick={() => {
        setTimeout(() => {
          defaultGameStore.start();
          console.log("Display", defaultGameStore.display, State[defaultGameStore.game.fsm.state]);
          setTimeout(() => {
            defaultGameStore.hide();
            console.log("Display", defaultGameStore.display, State[defaultGameStore.game.fsm.state]);
          }, 3000);
        }, 1000);
      }}>Start</button>
    </GameContext.Provider>
  )
}

export default App;
