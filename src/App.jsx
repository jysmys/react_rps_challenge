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
    images: [],
    currentImg: 0,
  };
  onButtonStartGame = (e) => {
    e.preventDefault();
    console.log("Starta spelet");
    this.setState({ display: !this.state.display });
  };
  onButtonStartRound = (e) => {
    e.preventDefault();
    console.log("Starta round");
    // this.setState({ display: !this.state.display });
  };
  componentDidMount() {
    const images = [
      require("./img/rock-paper-scissors-hand-icons/rock-computer.jpg"),
      require("./img/rock-paper-scissors-hand-icons/paper-computer.jpg"),
      require("./img/rock-paper-scissors-hand-icons/scissors-computer.jpg"),
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
    console.log(imgString);

    return (
      <>
        <Header />
        <StartGame
          onButtonStartGame={this.onButtonStartGame}
          display={this.state.display}
        />
        <ShowPicks display={this.state.display} />
        <img className="dynamicImage" src={imgString} alt=".jpg" />
        <StartRound
          onButtonStartGame={this.onButtonStartRound}
          display={this.state.display}
        />
      </>
    );
  }
}
export default App;
