//https://codesandbox.io/s/simple-react-countdown-timer-zyfr0?file=/src/index.tsx:32-67
import React, { useState, useEffect } from "react";

const NextRound = (props) => {
  const imageRock = require("../img/rps/rock-90d.jpg");
  const imagePaper = require("../img/rps/paper-90d.jpg");
  const imageSciccor = require("../img/rps/scissors-90d.jpg");
  const cimageRock = require("../img/rps/rock-computer-90d.jpg");
  const cimagePaper = require("../img/rps/paper-computer-90d.jpg");
  const cimageSciccor = require("../img/rps/scissors-computer-90d.jpg");
  let computerImg =
    props.computer === "rock"
      ? cimageRock
      : props.computer === "paper"
      ? cimagePaper
      : cimageSciccor;
  let playerImg =
    props.id === "rock"
      ? imageRock
      : props.id === "paper"
      ? imagePaper
      : imageSciccor;

  const showResult = (
    <>
      <div id="standing">
        <p>
          Player {props.playerWins} - {props.computerWins} Computer{" "}
        </p>
      </div>
      <p>Players pick</p>
      <img id="roundpick" src={playerImg} alt=".jpg" />
      <p>Computers pick</p>
      <img id="roundpick" src={computerImg} alt=".jpg" />
      <button id="nextround" onClick={props.onclick}>
        <p>Next round {props.roundNr + 1}</p>
      </button>
    </>
  );
  const showWinner =
    props.winner !== "Nobody" ? (
      <div id="winner">{props.winner} wins this round!</div>
    ) : (
      <div id="winner">
        Same, same so <br />
        Nobody wins...
      </div>
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
          {showWinner}
          {showResult}
        </>
      )}
    </>
  );
};
export default NextRound;
