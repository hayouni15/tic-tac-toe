import { useEffect, useState } from "react";

const boardState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(boardState);

  const handleClick = (row, col) => {
    const newBoard = [...gameBoard];
    newBoard[row][col] = "X";
    setGameBoard(newBoard);
  };

  return (
    <ol id="game-board">
      {gameBoard.map((row, indexRow) => (
        <ol key={indexRow}>
          {row.map((col, indexCol) => (
            <li key={indexCol}>
              <button onClick={() => handleClick(indexRow, indexCol)}>
                {col}
              </button>
            </li>
          ))}
        </ol>
      ))}
    </ol>
  );
}
