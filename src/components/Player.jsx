import { useState } from "react";

export default function Player({ name: initialName, symbol }) {
  //   const [name, setName] = useState("name");
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleClick = () => {
    setIsEditing((oldState) => !oldState);
  };

  const handleChange = (e) => {
    setPlayerName(e.target.value);
  };
  return (
    <li>
      <span className="player">
        {isEditing && (
          <input
            onChange={handleChange}
            placeholder={playerName}
            defaultValue={playerName}
            id="newName"
          ></input>
        )}
        {!isEditing && <span className="player-name">{playerName}</span>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
