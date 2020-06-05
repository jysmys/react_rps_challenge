import React, { useState, useEffect } from "react";
import showResult from "./showResultAndWinner";
import "../css/NextRound.css";
import { connect, useSelector } from "react-redux";

const NextRound = () => {
  const winner = useSelector((state) => state.winner);
  const roundNr = useSelector((state) => state.roundNr);
  
  const [counter, setCounter] = useState(3);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  const showresult = showResult();

  const shownextround = (
    <button id="nextround" onClick={onclick}>
      <p>Next round {roundNr}</p>
    </button>
  );

  const showwinner = (
    <div id="winner">
      <h5>{winner} wins this round!</h5>
    </div>
  );
  return (
    <div id="nextround">
      {counter !== 0 && <h4 className="countdown">{counter}</h4>}
      {counter === 0 && (
        <>
          {showwinner}
          {showresult}
          {shownextround}
        </>
      )}
    </div>
  );
};
export default NextRound;
