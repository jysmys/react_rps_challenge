import React, { useEffect, setState } from "react";
import Header from "./Header";
import StartGame from "./components/StartGame";
import StartRound from "./components/StartRound";
import ShowPicks from "./components/ShowPicks";
import ComputerShuffle from "./components/ComputerShuffle";
import NextRound from "./components/NextRound";

import "./css/App.css";
import Winner from "./components/Winner";
import { Footer } from "./Footer";
import { connect, useSelector } from "react-redux";
const imgLink = "./img/rps/";
const images = [
  require(imgLink + "rock-computer.jpg"),
  require(imgLink + "paper-computer.jpg"),
  require(imgLink + "scissors-computer.jpg"),
];
const App = () => {
  const player = useSelector((state) => state.player);
  const computer = useSelector((state) => state.computer);
  const playerWins = useSelector((state) => state.playerWins);
  const computerWins = useSelector((state) => state.computerWins);
  const gameWinner = useSelector((state) => state.gameWinner);
  const roundWinner = useSelector((state) => state.roundWinner);
  const [display, setDisplay] = setState(false);

  const [images] = setState(images);
  const [currentImg, setCurrentImg] = setState(0);

  useEffect(() => {
    return () => {
      let interval = setInterval(() => changeImage(), 1000);
    };
  }, []);

  const changeImage = () => {
    if (display) {
      let newCurrentImg = 0;
      if (currentImg !== 2) {
        newCurrentImg = currentImg + 1;
      }
      setCurrentImg(newCurrentImg);
    }
  };

  const resetState = () => {
    return {
      type: "RESET_FILTER",
    };
  };

  let imgString = images[currentImg];
  let renderGame;

  switch (true) {
    case !display && gameWinner === null && roundWinner === "":
      renderGame = <StartGame onButtonStartGame={() => setDisplay(!display)} />;
      break;
    case display && gameWinner === null && roundWinner === "":
      renderGame = (
        <div id="showpicks">
          <ShowPicks id={player} display={display} />
          {player !== "" && (
            <>
              <ComputerShuffle imgString={imgString} />
              <StartRound setDisplay={setDisplay} />
            </>
          )}
        </div>
      );
      break;
    case !display && roundWinner !== "" && gameWinner === null:
      renderGame = (
        <>
          <NextRound onclick={() => setDisplay(true)} />
        </>
      );
      break;
    case !display && gameWinner !== null:
      renderGame = <Winner onButtonPlayAgain={resetState} />;
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
