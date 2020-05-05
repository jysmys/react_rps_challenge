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
  let countRound =
    winner !== "Nobody" ? `Next round ${roundNr}` : `Replay round ${roundNr}`;

  const showResult = (
    <>
      <div id="standing">
        <h6>
          Player {playerWins} - {computerWins} Computer
        </h6>
      </div>
      <div id="winner">
        <div id="playerpick">
          <h6>Player</h6>
          <img id="roundpick" src={playerImg} alt=".jpg" />
        </div>
        <div id="computerpick">
          <h6>Computer</h6>
          <img id="roundpick" src={computerImg} alt=".jpg" />
        </div>
      </div>
    </>
  );
  const showNextRound = (
    <button id="nextround" onClick={onclick}>
      <p>{countRound}</p>
    </button>
  );
  const showWinner =
    winner !== "Nobody" ? (
      <div id="winner">
        <h5>{winner} wins this round!</h5>
      </div>
    ) : (
      <div id="winner">
        <h5>
          Same, same <br />
          Nobody wins this round...
        </h5>
      </div>
    );
  return { showResult, showNextRound, showWinner };
};
