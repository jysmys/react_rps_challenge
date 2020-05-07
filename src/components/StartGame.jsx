import React from "react";
import "../css/StartGame.css";

const StartGame = (props) => {
  return (
    <div>
      <div>
        <h5>Start game against the computer</h5>
      </div>
      <div>
        <h6>Best of 3 rounds</h6>
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
