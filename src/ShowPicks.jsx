import React from "react";

const ShowPicks = (props) => {
  let imageRock = require("./img/rock-paper-scissors-hand-icons/rock.jpg");
  let imagePaper = require("./img/rock-paper-scissors-hand-icons/paper.jpg");
  let imageSciccor = require("./img/rock-paper-scissors-hand-icons/scissors.jpg");
  const handleClick = (e) => props.onImgPick(e.target.id);
  const displayRock = props.id === "rock" || (props.id === "" && true);
  const displayPaper = props.id === "paper" || (props.id === "" && true);
  const displayScissor = props.id === "scissor" || (props.id === "" && true);

  return (
    <div>
      <div className="computerspick" id="computer">
        <p>Computers pick ???</p>
        <img className="dynamicImage" src={props.imgString} alt=".jpg" />
      </div>
      <p>Take your pick</p>
      <button
        className="imgbutton"
        id="rock"
        onClick={handleClick}
        style={{ display: !displayRock && "none" }}
      >
        <img id="rock" src={imageRock} alt="rock.jpg" />
      </button>

      <button
        className="imgbutton"
        id="paper"
        onClick={handleClick}
        style={{ display: !displayPaper && "none" }}
      >
        <img id="paper" src={imagePaper} alt="paper.jpg" />
      </button>
      <button
        className="imgbutton"
        id="scissor"
        onClick={handleClick}
        style={{ display: !displayScissor && "none" }}
      >
        <img id="scissor" src={imageSciccor} alt="scissors.jpg" />
      </button>
    </div>
  );
};
export default ShowPicks;
