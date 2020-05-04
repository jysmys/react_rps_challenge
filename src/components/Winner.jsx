//https://codesandbox.io/s/simple-react-countdown-timer-zyfr0?file=/src/index.tsx:32-67
import React, { useState, useEffect } from "react";
import "../css/Winner.css";

const Winner = (props) => {
  const winner = (
    <>
      <div id="standing">
        <h5>
          Player {props.playerWins} - {props.computerWins} Computer{" "}
        </h5>
      </div>
      <div id="winner">
        And the winner is... <br />
        {props.gameWinner}
      </div>
      <button id="playagain" onClick={props.onButtonPlayAgain}>
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
      {counter === 0 && <>{winner}</>}
    </>
  );
};
export default Winner;
