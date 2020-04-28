import React, { Component } from "react";
import Header from "./Header";
import StartGame from "./StartGame";
import StartRound from "./StartRound";
import ShowPicks from "./ShowPicks";
// import { images } from "./img/rock-paper-scissors-hand-icons/rock-computer.jpg";
// import ComputerPicks from "./ComputerPicks";
import "./App.css";
// import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
    display: false,
    id: "",
    images: [],
    currentImg: 0,
  };

  onButtonStartGame = (e) => {
    e.preventDefault();
    this.setState({ display: !this.state.display });
  };

  onImgPick = (id) => {
    console.log(id);
    this.setState({ id: id });
  };

  onButtonStartRound = (e) => {
    e.preventDefault();
    this.setState({ display: !this.state.display });
  };

  componentDidMount() {
    const imgLink = "./img/rock-paper-scissors-hand-icons/";
    const images = [
      require(imgLink + "rock-computer.jpg"),
      require(imgLink + "paper-computer.jpg"),
      require(imgLink + "scissors-computer.jpg"),
    ];
    this.setState({ images: images });
    this.interval = setInterval(() => this.changeImage(), 500);
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
          />
          <ShowPicks
            display={this.state.display}
            id={this.state.id}
            imgString={imgString}
            onImgPick={this.onImgPick}
          />
          <StartRound
            onButtonStartGame={this.onButtonStartRound}
            display={this.state.display}
          />
        </div>
      </>
    );
  }
}
export default App;
