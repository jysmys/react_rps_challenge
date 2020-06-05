import React from "react";
import { useSelector } from "react-redux";

const showPlayer = () => {
  const imageRock = require("../img/rps/rock-90d.jpg");
  const imagePaper = require("../img/rps/paper-90d.jpg");
  const imageSciccor = require("../img/rps/scissors-90d.jpg");

  const player = useSelector((state) => state.player);

  let playerImg =
    player === "rock"
      ? imageRock
      : player === "paper"
      ? imagePaper
      : imageSciccor;

  return playerImg;
};

const showComputer = () => {
  const cimageRock = require("../img/rps/rock-computer-90d.jpg");
  const cimagePaper = require("../img/rps/paper-computer-90d.jpg");
  const cimageSciccor = require("../img/rps/scissors-computer-90d.jpg");

  const computer = useSelector((state) => state.computer);

  let computerImg =
    computer === "rock"
      ? cimageRock
      : computer === "paper"
      ? cimagePaper
      : cimageSciccor;
  return computerImg;
};

const showResult = () => {
  const playerWins = useSelector((state) => state.playerWins);
  const computerWins = useSelector((state) => state.computerWins);
  return (
    <>
      <div id="standing">
        <h6>
          Player {playerWins} - {computerWins} Computer
        </h6>
      </div>
      <div id="winner">
        <div id="playerpick">
          <h6>Player</h6>
          <img id="roundpick" src={showPlayer()} alt=".jpg" />
        </div>
        <div id="computerpick">
          <h6>Computer</h6>
          <img id="roundpick" src={showComputer()} alt=".jpg" />
        </div>
      </div>
    </>
  );
};

export default showResult;
