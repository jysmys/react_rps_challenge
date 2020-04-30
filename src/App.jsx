import React, { Component } from "react";
import Header from "./Header";
import StartGame from "./StartGame";
import StartRound from "./StartRound";
import ShowPicks from "./ShowPicks";
import NextRound from "./NextRound";
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
    id: "",
    computer: "",
    images: [],
    currentImg: 0,
    winner: "",
    gameWin: [],
    gameWinner: null,
  };
  onButtonStartRound = () => {
    const computer = getComputerChoise();
    const roundWinner = announceRoundWinner(this.state.id, computer);
    const gameWinner = checkGameWinner(roundWinner, this.state.gameWin);
    this.setState({
      display: false,
      counter: this.state.counter,
      winner: roundWinner,
      gameWinner: gameWinner,
      computer: computer,
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
    if (this.interval) {
      clearInterval(this.interval);
    }
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
      gameWinner,
      id,
      computer,
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
            <ShowPicks
              id={id}
              imgString={imgString}
              onImgPick={this.onImgPick}
              display={display}
              // onButtonStartRound={this.onButtonStartRound(this.id)}
            />
            <StartRound
              onButtonStartRound={this.onButtonStartRound}
              winner={winner}
            />
          </>
        );
        break;
      case !display && winner !== "" && gameWinner === null:
        renderGame = (
          <>
            <NextRound
              winner={winner}
              id={id}
              computer={computer}
              onclick={() =>
                this.setState({ display: true, winner: "", id: "" })
              }
            />
          </>
        );
        break;
      case !display && gameWinner !== null:
        renderGame = (
          <>
            <div id="winner">
              And the winner is... <br />
              {gameWinner}
            </div>
            <button
              id="playagain"
              onClick={() => {
                this.setState({
                  display: true,
                  gameWinner: null,
                  winner: "",
                  id: "",
                });
              }}
            >
              <p>Play again</p>
            </button>
          </>
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
