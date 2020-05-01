import React from "react";

const Winner = (props) => {
  return (
    <>
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
