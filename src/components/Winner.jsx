import React, { useState, useEffect } from "react";
import showResult from "./showResultAndWinner";
import "../css/Winner.css";

const Winner = (props) => {
  const winner = (
    <>
      <div id="standing">
        <div id="final-winner">
          <h4>Winner is {props.gameWinner}</h4>
        </div>
      </div>
      <button id="nextround" onClick={props.onButtonPlayAgain}>
        <p>Play again ?</p>
      </button>
    </>
  );

  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <>
      {counter !== 0 && (
        <div className="countdown">
          <div>{counter}</div>
        </div>
      )}
      {counter === 0 && (
        <>
          {showResult}
          {winner}
        </>
      )}
    </>
  );
};

export default Winner;
