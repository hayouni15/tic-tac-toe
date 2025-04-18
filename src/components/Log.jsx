export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn, index) => (
        <li key={index}>
          {turn.player} selected {turn.location.row},{turn.location.col}
        </li>
      ))}
    </ol>
  );
}
