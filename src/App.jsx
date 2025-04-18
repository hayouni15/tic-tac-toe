import { useEffect, useState } from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";

function App() {
  const [turns, setTurns] = useState([]);
  const [winner, setWinner] = useState(null);
  const handleSelect = (row, col) => {
    setTurns((prevState) => {
      const cuurentPlayer =
        prevState.length > 0 && prevState[0].player === "X" ? "O" : "X";

      return [
        {
          player: cuurentPlayer,
          location: { row, col },
        },
        ...turns,
      ];
    });
  };

  const checkWinner = () => {
    const initialBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    const gameBoard = [...initialBoard.map((row) => [...row])];
    for (const turn of turns) {
      const { player, location } = turn;
      gameBoard[location.row][location.col] = player;
    }
    console.log("echking winner");
    // check rows
    for (const row of gameBoard) {
      if (row.every((cell) => cell === row[0] && row[0] !== null)) {
        console.log("we have a winner");
        setWinner(row[0]);
      }
    }

    // check cols
  };

  const rematch = () => {
    console.log("rematching");
    setTurns([]);
    setWinner(null);
  };

  console.log(turns);
  useEffect(() => {
    checkWinner();
  }, [turns]);

  console.log(winner);

  return (
    <div>
      <Header></Header>
      <div id="game-container">
        <ol id="players" className=" highlight-player">
          <Player
            name="player 1"
            symbol="X"
            isActive={
              (turns.length > 0 && turns[0]?.player === "O") ||
              turns.length == 0
            }
          ></Player>
          <Player
            name="player 2"
            symbol="O"
            isActive={turns.length > 0 && turns[0]?.player === "X"}
          ></Player>
        </ol>

        <GameBoard
          winner={winner}
          handleSelect={handleSelect}
          turns={turns}
        ></GameBoard>
        {(winner != null || (!winner && turns.length === 9)) && (
          <GameOver winner={winner} rematch={rematch}></GameOver>
        )}
      </div>
      <Log turns={turns}></Log>
    </div>
  );
}

export default App;
