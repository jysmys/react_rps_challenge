import React, { Component } from "react";
import { getData } from "../helpers/getData";

class ShowScore extends Component {
  state = { userscore: {}, names: {}, topscores: {}, fetched: false };

  componentDidMount() {
    this.getScores();
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex !== prevProps.updateIndex) {
      this.getScores();
    }
  }

  merge = (topscores, names) => {
    const scoresWithNames = [];

    topscores.forEach((topscore) => {
      names.forEach((name) => {
        if (topscore.id === name.id) {
          scoresWithNames.push({ ...topscore, ...name });
        }
      });
    });

    return scoresWithNames;
  };

  async getScores() {
    let result = await getData();
    console.log(result.data);
    let topscore = this.merge(result.data.topscores, result.data.names);
    this.setState({
      userscore: result.data.userscore,
      topscores: topscore,
      fetched: true,
    });
    console.log(this.state.topscores);
  }

  render() {
    let userScore;
    this.state.fetched &&
      (userScore = (
        <div id="scores">
          <p>Wins: {this.state.userscore.nr_wins}</p>
          <p>Lost: {this.state.userscore.nr_lost}</p>
          <p>Games played: {this.state.userscore.nr_of_play}</p>
        </div>
      ));
    return <div>{userScore}</div>;
  }
}
export default ShowScore;
