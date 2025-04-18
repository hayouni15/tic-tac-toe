export default function GameOver({ winner, rematch }) {
  console.log(winner);

  return (
    <div id="game-over">
      <h2>{winner ? `${winner?.name} Won` : "Draw, Play Again!"}</h2>
      <p>
        <button onClick={() => rematch()}>Rematch</button>
      </p>
    </div>
  );
}
