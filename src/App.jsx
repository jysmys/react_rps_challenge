import React, { Component } from "react";
import Header from "./Header";
import StartGame from "./StartGame";
import StartRound from "./StartRound";
import ShowPicks from "./ShowPicks";
import { getComputerChoise } from "./helpers/getComputerChoise";
import {
  announceRoundWinner,
  checkGameWinner,
} from "./helpers/announceRoundWinner";
import "./App.css";
// import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
    display: false,
    countdown: false,
    id: "",
    images: [],
    currentImg: 0,
    winner: "",
    gameWin: [],
    gameWinner: null,
  };

  onButtonStartRound = () => {
    const roundWinner = announceRoundWinner(this.state.id, getComputerChoise());
    const gameWinner = checkGameWinner(roundWinner, this.state.gameWin);
    this.setState({
      display: false,
      counter: this.state.counter,
      winner: roundWinner,
      gameWinner: gameWinner,
    });
  };

  componentDidMount() {
    const imgLink = "./img/rock-paper-scissors-hand-icons/";
    const images = [
      require(imgLink + "rock-computer.jpg"),
      require(imgLink + "paper-computer.jpg"),
      require(imgLink + "scissors-computer.jpg"),
    ];
    this.setState({ images: images });
    this.interval = setInterval(() => this.changeImage(), 1000);
  }

  onImgPick = (id) => {
    this.setState({ id: id });
  };

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeImage() {
    let newCurrentImg = 0;
    const { images, currentImg } = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }

    this.setState({ currentImg: newCurrentImg });
  }
  render() {
    const { display, images, currentImg, winner, gameWinner } = this.state;
    let imgString = images[currentImg];
    let renderGame;

    switch (true) {
      case !display && gameWinner === null && winner === "":
        renderGame = (
          <StartGame
            onButtonStartGame={() =>
              this.setState({ display: !this.state.display })
            }
            display={this.state.display}
            countdown={this.state.countdown}
          />
        );
        break;
      case display && winner === "":
        renderGame = (
          <>
            <ShowPicks
              display={this.state.display}
              id={this.state.id}
              imgString={imgString}
              onImgPick={this.onImgPick}
            />
            <StartRound
              onButtonStartRound={this.onButtonStartRound}
              display={this.state.display}
              winner={this.state.winner}
            />
          </>
        );
        break;
      case !display && winner !== "" && gameWinner === null:
        renderGame = (
          <>
            {this.state.winner !== "Nobody" ? (
              <div id="winner">{this.state.winner} wins this round!</div>
            ) : (
              <div id="winner">Nobody wins...</div>
            )}
            <button
              id="nextround"
              onClick={() =>
                this.setState({ display: true, winner: "", id: "" })
              }
            >
              Next round
            </button>
          </>
        );
        break;
      case !display && gameWinner !== null:
        renderGame = (
          <div id="winner">
            And the winner is... <br />
            {gameWinner}
          </div>
        );
        break;
      default:
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
