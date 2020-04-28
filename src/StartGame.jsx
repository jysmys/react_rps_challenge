import React from "react";

const StartGame = (props) => {
  return (
    <div
      style={{
        display: (props.display && "none") || (props.countdown && "none"),
      }}
    >
      <div>
        <p>
          Click here to start a game against the computer <br /> Best of 5
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
