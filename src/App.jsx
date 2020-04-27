import React, { Component } from "react";
import Header from "./Header";
import StartGame from "./StartGame";
import "./App.css";
// import { Switch, Route, BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {
    button: false,
  };
  onButtonStartGame = (e) => {
    e.preventDefault();
    console.log("Starta spelet" + this.state.button);
    this.setState({ button: !this.state.button });
  };

  render() {
    return (
      <div>
        <Header />
        <StartGame onButtonStartGame={this.onButtonStartGame} />
      </div>
    );
  }
}
export default App;
