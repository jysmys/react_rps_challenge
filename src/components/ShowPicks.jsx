import React from "react";
import { connect, useSelector } from "react-redux";
import "../css/ShowPicks.css";
import { getComputerChoise } from "../helpers/getComputerChoise";

const ShowPicks = (props) => {
  const imageRock = require("../img/rps/rock.jpg");
  const imagePaper = require("../img/rps/paper.jpg");
  const imageSciccor = require("../img/rps/scissors.jpg");
  const displayRock = props.id === "rock" || (props.id === "" && true);
  const displayPaper = props.id === "paper" || (props.id === "" && true);
  const displayScissor = props.id === "scissor" || (props.id === "" && true);

  const player = useSelector((state) => state.player);
  const computer = useSelector((state) => state.computer);

  const onImgPick = () => {
    // let computer = getComputerChoise();
    while (computer === player) {
      computer = getComputerChoise();
    }
    props.dispatch({
      type: "PLAYER",
      payload: { player: player, computer: computer },
    });
  };

  return (
    <div id="showpick">
      <div id="yourpick">
        {props.player === "" ? <h6>Take your pick</h6> : <h6>Your pick</h6>}
      </div>
      {displayRock && (
        <button
          className="imgbutton"
          id="rock"
          onClick={(e) => onImgPick(e.target.id)}
        >
          <img id="rock" src={imageRock} alt="rock.jpg" />
        </button>
      )}
      {displayPaper && (
        <button
          className="imgbutton"
          id="paper"
          onClick={(e) => onImgPick(e.target.id)}
        >
          <img id="paper" src={imagePaper} alt="paper.jpg" />
        </button>
      )}
      {displayScissor && (
        <button
          className="imgbutton"
          id="scissor"
          onClick={(e) => onImgPick(e.target.id)}
        >
          <img id="scissor" src={imageSciccor} alt="scissors.jpg" />
        </button>
      )}
    </div>
  );
};
export default connect()(ShowPicks);
