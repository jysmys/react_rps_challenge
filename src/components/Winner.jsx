import React from "react";

const Winner = (props) => {
  return (
    <>
      <div id="standing">
        <p>
          Player {props.playerWins} - {props.computerWins} Computer{" "}
        </p>
      </div>
      <div id="winner">
        And the winner is... <br />
        {props.gameWinner}
      </div>
      <button id="playagain" onClick={props.onButtonPlayAgain}>
        <p>Play again</p>
      </button>
    </>
  );
};
export default Winner;
