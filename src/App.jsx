import React, { Component } from "react";
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
import "./App.css";
import Winner from "./components/Winner";
// import CountTimer from "./components/CountTimer";
// import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
    display: false,
    id: "",
    computer: "",
    images: [],
    currentImg: 0,
    winner: "",
    gameWin: [],
    gameWinner: null,
    playerWins: 0,
    computerWins: 0,
  };
  onButtonStartRound = () => {
    const computer = getComputerChoise();
    const roundWinner = announceRoundWinner(this.state.id, computer);
    const wins = checkGameWinner(roundWinner, this.state.gameWin);
    this.setState({
      display: false,
      counter: this.state.counter,
      winner: roundWinner,
      gameWin: wins.gameWin,
      gameWinner: wins.gamewinner,
      computer: computer,
      playerWins: wins.player,
      computerWins: wins.computer,
    });
  };
  onImgPick = (id) => {
    this.setState({ id: id });
  };
  componentDidMount() {
    const imgLink = "./img/rps/";
    const images = [
      require(imgLink + "rock-computer.jpg"),
      require(imgLink + "paper-computer.jpg"),
      require(imgLink + "scissors-computer.jpg"),
    ];
    this.setState({ images: images });
    this.interval = setInterval(() => this.changeImage(), 1000);
  }
  componentWillUnmount() {
    this.interval && clearInterval(this.interval);
  }
  changeImage() {
    if (this.state.display) {
      let newCurrentImg = 0;
      if (this.state.currentImg !== 2) {
        newCurrentImg = this.state.currentImg + 1;
      }
      this.setState({ currentImg: newCurrentImg });
    }
  }
  render() {
    const {
      display,
      images,
      currentImg,
      winner,
      gameWin,
      gameWinner,
      id,
      computer,
      playerWins,
      computerWins,
    } = this.state;
    let imgString = images[currentImg];
    let renderGame;

    switch (true) {
      case !display && gameWinner === null && winner === "":
        renderGame = (
          <StartGame
            onButtonStartGame={() => this.setState({ display: !display })}
          />
        );
        break;
      case display && gameWinner === null && winner === "":
        renderGame = (
          <>
            <ShowPicks id={id} onImgPick={this.onImgPick} display={display} />
            {id !== "" && (
              <>
                <ComputerShuffle imgString={imgString} />
                <StartRound
                  onButtonStartRound={this.onButtonStartRound}
                  winner={winner}
                  roundNr={gameWin.length + 1}
                />
              </>
            )}
          </>
        );
        break;
      case !display && winner !== "" && gameWinner === null:
        renderGame = (
          <>
            <NextRound
              winner={winner}
              id={id}
              roundNr={gameWin.length}
              computer={computer}
              playerWins={playerWins}
              computerWins={computerWins}
              onclick={() =>
                this.setState({ display: true, winner: "", id: "" })
              }
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
            onButtonPlayAgain={() => {
              this.setState({
                display: true,
                gameWinner: null,
                winner: "",
                gameWin: [],
                id: "",
              });
            }}
          />
        );
        break;
      default:
        break;
    }
    return (
      <>
        <Header />
        <div className="game">{renderGame}</div>
      </>
    );
  }
}
export default App;
