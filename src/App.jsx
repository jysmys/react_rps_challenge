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
import "./css/App.css";
import Winner from "./components/Winner";
import { Segment } from "semantic-ui-react";
// import { Footer } from "./Footer";

class App extends Component {
  state = {
    display: false,
    player: "",
    computer: "",
    images: [],
    currentImg: 0,
    winner: "",
    gameWinner: null,
    playerWins: 0,
    computerWins: 0,
  };
  onButtonStartRound = () => {
    const roundWinner = announceRoundWinner(
      this.state.player,
      this.state.computer
    );
    const wins = checkGameWinner(
      roundWinner,
      this.state.playerWins,
      this.state.computerWins
    );
    this.setState({
      display: false,
      counter: this.state.counter,
      winner: roundWinner,
      gameWinner: wins.gameWinner,
      playerWins: wins.playerWins,
      computerWins: wins.computerWins,
    });
  };
  onImgPick = (player) => {
    let computer;
    computer = getComputerChoise();
    while (computer === player) {
      computer = getComputerChoise();
    }
    // debugger;
    this.setState({ player: player, computer: computer });
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
      gameWinner,
      player,
      computer,
      playerWins,
      computerWins,
    } = this.state;
    let imgString = images[currentImg];
    let renderGame;
    let roundNr = playerWins + computerWins + 1;
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
          <div id="showpicks">
            <ShowPicks
              id={player}
              onImgPick={this.onImgPick}
              display={display}
            />
            {player !== "" && (
              <>
                <ComputerShuffle imgString={imgString} />
                <StartRound
                  onButtonStartRound={this.onButtonStartRound}
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
              onclick={() =>
                this.setState({ display: true, winner: "", player: "" })
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
            player={player}
            computer={computer}
            onButtonPlayAgain={() => {
              this.setState({
                display: true,
                gameWinner: null,
                winner: "",
                player: "",
                computer: "",
                playerWins: 0,
                computerWins: 0,
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
        <Segment centered className="game">
          {renderGame}
        </Segment>
        {/* <Footer /> */}
      </>
    );
  }
}
export default App;
