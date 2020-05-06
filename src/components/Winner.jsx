//https://codesandbox.io/s/simple-react-countdown-timer-zyfr0?file=/src/index.tsx:32-67
import React, { useState, useEffect } from "react";
import { show } from "./showResultAndWinner";
import "../css/Winner.css";

const Winner = (props) => {
  const { showResult } = show(
    props.playerWins,
    props.computerWins,
    props.onclick,
    props.roundNr,
    props.winner,
    props.computer,
    props.id
  );
  const winner = (
    <>
      <div id="standing">
        <div id="final-winner">
          <h4>
            Winner is
            <br />
            {props.gameWinner}
          </h4>
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
