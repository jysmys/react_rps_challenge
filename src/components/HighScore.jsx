import React, { Component } from "react";
import { getData } from "../helpers/getData";

class HighScore extends Component {
  state = { scoreData: {}, fetched: false };

  componentDidMount() {
    this.getScores();
  }

  componentDidUpdate(prevProps) {
    if (this.props.updateIndex !== prevProps.updateIndex) {
      this.getScores();
    }
  }

  async getScores() {
    let result = await getData();
    this.setState({ scoreData: result.data.entries, fetched: true });
    console.log(this.state.scoreData);
  }

  render() {
    return (
      <div>
        {this.state.fetched && (
          <div id="scores">
            <h6>Wins: {this.state.scoreData.nr_wins}</h6>
            <h6>Looser: {this.state.scoreData.nr_lost}</h6>
            <h6>Games played: {this.state.scoreData.nr_of_play}</h6>
          </div>
        )}
      </div>
    );
  }
}
export default HighScore;
