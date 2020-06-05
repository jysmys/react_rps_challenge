import React from "react";
import { connect, useSelector } from "react-redux";
import {
  announceRoundWinner,
  checkGameWinner,
} from "./helpers/announceRoundWinner";
import "../css/StartRound.css";

const StartRound = (props) => {
  const player = useSelector((state) => state.player);
  const computer = useSelector((state) => state.computer);
  const playerWins = useSelector((state) => state.playerWins);
  const computerWins = useSelector((state) => state.computerWins);
  const roundNr = useSelector((state) => state.roundNr);
  const counter = useSelector((state) => state.counter);

  const onButtonStartRound = () => {
    const roundWinner = announceRoundWinner(player, computer);
    const wins = checkGameWinner(roundWinner, playerWins, computerWins);
    props.setDisplay(false);
    props.dispatch({
      type: "WINNER",
      payload: {
        roundWinner: wins.roundWinner,
        gameWinner: wins.gameWinner,
        playerWins: wins.playerWins,
        computerWins: wins.computerWins,
        counter: counter,
      },
    });
  };

  return (
    <div className="startround">
      <button id="startround" onClick={onButtonStartRound}>
        <p id="roundbutton">Start round {roundNr}</p>
      </button>
    </div>
  );
};
export default connect()(StartRound);
