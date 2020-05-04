import React from "react";
import { Grid, Button } from "semantic-ui-react";
import "../css/StartGame.css";

const StartGame = (props) => {
  return (
    <Grid centered>
      <Grid.Column>
        <h5>Start game against the computer</h5>
      </Grid.Column>
      <Grid.Column>
        <h6>Best of 3 rounds</h6>
      </Grid.Column>
      <Grid.Column>
        <Button id="startgame" onClick={props.onButtonStartGame}>
          <p id="startbutton">Start game</p>
        </Button>
      </Grid.Column>
    </Grid>
  );
};
export default StartGame;
