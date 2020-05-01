import React from "react";
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

  return (
    <>
      {props.winner !== "Nobody" ? (
        <div id="winner">{props.winner} wins this round!</div>
      ) : (
        <div id="winner">
          Same, same so <br />
          Nobody wins...
        </div>
      )}
      <div id="standing">
        <p>
          Player {props.playerWins} - {props.computerWins} Computer{" "}
        </p>
      </div>
      <p>Computers pick</p>
      <img id="roundpick" src={computerImg} alt=".jpg" />
      <p>Players pick</p>
      <img id="roundpick" src={playerImg} alt=".jpg" />
      <button id="nextround" onClick={props.onclick}>
        <p>Next round {props.roundNr + 1}</p>
      </button>
    </>
  );
};
export default NextRound;
