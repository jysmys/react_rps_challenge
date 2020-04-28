import React, { Component } from "react";
import Header from "./Header";
import StartGame from "./StartGame";
import StartRound from "./StartRound";
import "./App.css";
// import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
    display: false,
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

  render() {
    return (
      <div>
        <Header />
        <StartGame
          onButtonStartGame={this.onButtonStartGame}
          display={this.state.display}
        />
        <StartRound
          onButtonStartGame={this.onButtonStartRound}
          display={this.state.display}
        />
      </div>
    );
  }
}
export default App;
