import React from "react";

export const show = (
  playerWins,
  computerWins,
  onclick,
  roundNr,
  winner,
  computer,
  id
) => {
  const imageRock = require("../img/rps/rock-90d.jpg");
  const imagePaper = require("../img/rps/paper-90d.jpg");
  const imageSciccor = require("../img/rps/scissors-90d.jpg");
  const cimageRock = require("../img/rps/rock-computer-90d.jpg");
  const cimagePaper = require("../img/rps/paper-computer-90d.jpg");
  const cimageSciccor = require("../img/rps/scissors-computer-90d.jpg");
  let computerImg =
    computer === "rock"
      ? cimageRock
      : computer === "paper"
      ? cimagePaper
      : cimageSciccor;
  let playerImg =
    id === "rock" ? imageRock : id === "paper" ? imagePaper : imageSciccor;

  const showResult = (
    <>
      <div id="standing">
        <p>
          Player {playerWins} - {computerWins} Computer{" "}
        </p>
      </div>
      <p>Players pick</p>
      <img id="roundpick" src={playerImg} alt=".jpg" />
      <p>Computers pick</p>
      <img id="roundpick" src={computerImg} alt=".jpg" />
      <button id="nextround" onClick={onclick}>
        <p>Next round {roundNr + 1}</p>
      </button>
    </>
  );
  const showWinner =
    winner !== "Nobody" ? (
      <div id="winner">{winner} wins this round!</div>
    ) : (
      <div id="winner">
        Same, same so <br />
        Nobody wins...
      </div>
    );
  return { showResult, showWinner };
};
