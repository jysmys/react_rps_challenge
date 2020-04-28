import React, { Component } from "react";
import Header from "./Header";
import StartGame from "./StartGame";
import StartRound from "./StartRound";
import ShowPicks from "./ShowPicks";
import Countdown from "./Countdown";
// import { winner } from "./helpers/winner";
// import { images } from "./img/rock-paper-scissors-hand-icons/rock-computer.jpg";
// import ComputerPicks from "./ComputerPicks";
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

  onButtonStartGame = (e) => {
    e.preventDefault();
    this.setState({ display: !this.state.display });
  };

  onImgPick = (id) => {
    this.setState({ id: id });
  };

  onButtonStartRound = (e) => {
    e.preventDefault();
    console.log("CountDown NOW");
    this.setState({
      display: false,
      countdown: true,
      counter: this.state.counter,
    });
    // console.log(winner());
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
            onButtonStartGame={this.onButtonStartGame}
            display={this.state.display}
            countdown={this.state.countdown}
          />
          <ShowPicks
            display={this.state.display}
            id={this.state.id}
            imgString={imgString}
            onImgPick={this.onImgPick}
          />
          <StartRound
            onButtonStartRound={this.onButtonStartRound}
            display={this.state.display}
          />
          {this.state.countdown && (
            <Countdown countdown={this.state.countdown} counter="5" />
          )}
        </div>
      </>
    );
  }
}
export default App;
