import React from "react";

const StartGame = (props) => {
  return (
    <div>
      <button id="startgame" onClick={props.onButtonStartGame}>
        <p id="startbutton">Start game</p>
      </button>
    </div>
  );
};

export default StartGame;
