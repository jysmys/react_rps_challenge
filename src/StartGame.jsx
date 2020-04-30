import React from "react";

const StartGame = (props) => {
  return (
    <div>
      <div>
        <p>
          Click here to start a game against the computer <br /> Best of 3
          rounds
        </p>
      </div>
      <div>
        <button id="startgame" onClick={props.onButtonStartGame}>
          <p id="startbutton">Start game</p>
        </button>
      </div>
    </div>
  );
};

export default StartGame;
