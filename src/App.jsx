import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player-name">Player 1</span>
            <span className="player-symbol">X</span>
          </li>
          <li>
            <span className="player-name">Player 2</span>
            <span className="player-symbol">O</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default App;
