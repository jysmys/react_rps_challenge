import React from "react";

const StartGame = (props) => {
  return (
    <div>
      <button id="startgame" onClick={props.onButtonStartGame} style={{ display: !props.display && "none" }}>
        <p id="startbutton">Start game</p>
      </button>
    </div>
  );
};

export default StartGame;
