//https://codesandbox.io/s/simple-react-countdown-timer-zyfr0?file=/src/index.tsx:32-67
import React, { useState, useEffect } from "react";
import { show } from "./showResultAndWinner";
import "../css/NextRound.css";

const NextRound = (props) => {
  const { showWinner, showResult } = show(
    props.playerWins,
    props.computerWins,
    props.onclick,
    props.roundNr,
    props.winner,
    props.computer,
    props.id
  );
  const [counter, setCounter] = useState(3);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div id="nextround">
      {counter !== 0 && <div className="countdown">{counter}</div>}
      {counter === 0 && (
        <>
          {showWinner}
          {showResult}
        </>
      )}
    </div>
  );
};
export default NextRound;
