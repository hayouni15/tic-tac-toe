import { useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div>
      <Header></Header>
      <div id="game-container">
        <ol id="players">
          <Player name="player 1" symbol="X"></Player>
          <Player name="player 2" symbol="O"></Player>
        </ol>
        <GameBoard></GameBoard>
      </div>
    </div>
  );
}

export default App;
