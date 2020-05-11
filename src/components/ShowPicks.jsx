import React from "react";
import "../css/ShowPicks.css";

const ShowPicks = (props) => {
  const imageRock = require("../img/rps/rock.jpg");
  const imagePaper = require("../img/rps/paper.jpg");
  const imageSciccor = require("../img/rps/scissors.jpg");
  const displayRock = props.id === "rock" || (props.id === "" && true);
  const displayPaper = props.id === "paper" || (props.id === "" && true);
  const displayScissor = props.id === "scissor" || (props.id === "" && true);

  return (
    <div id="showpick">
      <div id="yourpick">
        {props.player === "" ? <h6>Take your pick</h6> : <h6>Your pick</h6>}
      </div>
      {displayRock && (
        <button
          className="imgbutton"
          id="rock"
          onClick={(e) => props.onImgPick(e.target.id)}
        >
          <img id="rock" src={imageRock} alt="rock.jpg" />
        </button>
      )}
      {displayPaper && (
        <button
          className="imgbutton"
          id="paper"
          onClick={(e) => props.onImgPick(e.target.id)}
        >
          <img id="paper" src={imagePaper} alt="paper.jpg" />
        </button>
      )}
      {displayScissor && (
        <button
          className="imgbutton"
          id="scissor"
          onClick={(e) => props.onImgPick(e.target.id)}
        >
          <img id="scissor" src={imageSciccor} alt="scissors.jpg" />
        </button>
      )}
    </div>
  );
};
export default ShowPicks;
