import React, { Component } from "react";
import Header from "./Header";
import StartGame from "./StartGame";
import StartRound from "./StartRound";
import ShowPicks from "./ShowPicks";
import { getComputerChoise } from "./helpers/getComputerChoise";
import { announceRoundWinner } from "./helpers/announceRoundWinner";
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
  };

  onButtonStartRound = (e) => {
    e.preventDefault(); // REMOVE??
    const winner = announceRoundWinner(this.state.id, getComputerChoise());
    console.log(winner);
    this.setState({
      display: false,
      countdown: true,
      counter: this.state.counter,
      winner: winner,
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
    const { images, currentImg } = this.state;
    let imgString = images[currentImg];

    return (
      <>
        <Header />
        <div className="game">
          <StartGame
            onButtonStartGame={() =>
              this.setState({ display: !this.state.display })
            }
            display={this.state.display}
            countdown={this.state.countdown}
          />
          <ShowPicks
            display={this.state.display}
            id={this.state.id}
            imgString={imgString}
            onImgPick={this.onImgPick}
          />
          {/* REFACTOR AUTO START round if a img is clicked on??? With a onChangeHandler instead???  */}
          <StartRound
            onButtonStartRound={this.onButtonStartRound}
            display={this.state.display}
            winner={this.state.winner}
          />
        </div>
      </>
    );
  }
}
export default App;
