import React from "react";
import "../css/ShowPicks.css";

const ShowPicks = (props) => {
  const imageRock = require("../img/rps/rock.jpg");
  const imagePaper = require("../img/rps/paper.jpg");
  const imageSciccor = require("../img/rps/scissors.jpg");
  const handleClick = (e) => props.onImgPick(e.target.id);
  const displayRock = props.id === "rock" || (props.id === "" && true);
  const displayPaper = props.id === "paper" || (props.id === "" && true);
  const displayScissor = props.id === "scissor" || (props.id === "" && true);

  return (
    <div id="showpick">
      <div id="yourpick">
        {props.id === "" ? <h6>Take your pick</h6> : <h6>Your pick</h6>}
      </div>
      {/* <div id="buttonpick"> */}
      {displayRock && (
        <button className="imgbutton" id="rock" onClick={handleClick}>
          <img id="rock" src={imageRock} alt="rock.jpg" />
        </button>
      )}
      {displayPaper && (
        <button className="imgbutton" id="paper" onClick={handleClick}>
          <img id="paper" src={imagePaper} alt="paper.jpg" />
        </button>
      )}
      {displayScissor && (
        <button className="imgbutton" id="scissor" onClick={handleClick}>
          <img id="scissor" src={imageSciccor} alt="scissors.jpg" />
        </button>
      )}
      {/* </div> */}
    </div>
  );
};
export default ShowPicks;
