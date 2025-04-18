import { useEffect, useState } from "react";

const boardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard({ turns, handleSelect, winner }) {
  //   const [gameBoard, setGameBoard] = useState(boardState);

  //   const handleClick = (row, col) => {
  //     console.log(activePlayer);
  //     const newBoard = [...gameBoard];
  //     newBoard[row][col] = activePlayer;
  //     setGameBoard(newBoard);
  //     changePlayer();
  //   };
  console.log(turns);
  const gameBoard = [...boardState.map((array) => [...array])];

  if (turns) {
    for (const turn of turns) {
      const { player, location } = turn;
      gameBoard[location.row][location.col] = player;
    }
  }
  console.log(gameBoard);

  return (
    <ol id="game-board">
      {gameBoard.map((row, indexRow) => (
        <ol key={indexRow}>
          {row.map((col, indexCol) => (
            <li key={indexCol}>
              <button
                disabled={col !== null || winner}
                onClick={() => handleSelect(indexRow, indexCol)}
              >
                {col}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
