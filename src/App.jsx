import React, { useEffect, setState } from "react";
import Header from "./Header";
import StartGame from "./components/StartGame";
import StartRound from "./components/StartRound";
import ShowPicks from "./components/ShowPicks";
import ComputerShuffle from "./components/ComputerShuffle";
import NextRound from "./components/NextRound";
import { getComputerChoise } from "./helpers/getComputerChoise";
import {
  announceRoundWinner,
  checkGameWinner,
} from "./helpers/announceRoundWinner";
import "./css/App.css";
import Winner from "./components/Winner";
import { Footer } from "./Footer";

import React from "react";

const App = () => {
  const [display, setDisplay] = setState(false);
  const [player, setPlayer] = setState("");
  const [computer, setComputer] = setState("");
  const [counter, setCounter] = setState(null);
  const [images, setImages] = setState([]);
  const [currentImg, setCurrentImg] = setState(0);
  const [winner, setWinner] = setState("");
  const [gameWinner, setGameWinner] = setState(null);
  const [playerWins, setPlayerWins] = setState(0);
  const [computerWins, setComputerWins] = setState(0);

  useEffect(() => {
    return () => {
      const imgLink = "./img/rps/";
      const images = [
        require(imgLink + "rock-computer.jpg"),
        require(imgLink + "paper-computer.jpg"),
        require(imgLink + "scissors-computer.jpg"),
      ];
      setImages(images);
      interval = setInterval(() => changeImage(), 1000);
    };
  }, []);

  onButtonStartRound = () => {
    const roundWinner = announceRoundWinner(player, computer);
    const wins = checkGameWinner(roundWinner, playerWins, computerWins);
    setDisplay(false);
    setCounter(counter);
    setWinner(roundWinner);
    setGameWinner(wins.gameWinner);
    setPlayerWins(wins.playerWins);
    computerWins(wins.computerWins);
  };

  onImgPick = (player) => {
    let computer;
    computer = getComputerChoise();
    while (computer === player) {
      computer = getComputerChoise();
    }
    setPlayer(player);
    setComputer(computer);
  };

  changeImage = () => {
    if (display) {
      let newCurrentImg = 0;
      if (currentImg !== 2) {
        newCurrentImg = currentImg + 1;
      }
      setCurrentImg(newCurrentImg);
    }
  };

  resetState = () => {
    setDisplay(false),
      setGameWinner(null),
      setWinner(""),
      setPlayer(""),
      setComputer(""),
      setPlayerWins(0),
      setComputerWins(0);
  };

  let imgString = images[currentImg];
  let renderGame;
  let roundNr = playerWins + computerWins + 1;

  switch (true) {
    case !display && gameWinner === null && winner === "":
      renderGame = <StartGame onButtonStartGame={() => setDisplay(!display)} />;
      break;
    case display && gameWinner === null && winner === "":
      renderGame = (
        <div id="showpicks">
          <ShowPicks id={player} onImgPick={onImgPick} display={display} />
          {player !== "" && (
            <>
              <ComputerShuffle imgString={imgString} />
              <StartRound
                onButtonStartRound={onButtonStartRound}
                winner={winner}
                roundNr={roundNr}
              />
            </>
          )}
        </div>
      );
      break;
    case !display && winner !== "" && gameWinner === null:
      renderGame = (
        <>
          <NextRound
            winner={winner}
            player={player}
            computer={computer}
            roundNr={roundNr}
            playerWins={playerWins}
            computerWins={computerWins}
            onclick={(() => setDisplay(true), setWinner(""), setPlayer(""))}
          />
        </>
      );
      break;
    case !display && gameWinner !== null:
      renderGame = (
        <Winner
          gameWinner={gameWinner}
          playerWins={playerWins}
          computerWins={computerWins}
          player={player}
          computer={computer}
          onButtonPlayAgain={resetState}
        />
      );
      break;
    default:
  }

  return (
    <>
      <Header />
      <div centered className="game">
        {renderGame}
      </div>
      <Footer />
    </>
  );
};

export default App;
