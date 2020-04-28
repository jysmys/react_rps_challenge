import React from "react";

const ShowPicks = (props) => {
  let imageRock = require("./img/rock-paper-scissors-hand-icons/rock.jpg");
  let imagePaper = require("./img/rock-paper-scissors-hand-icons/paper.jpg");
  let imageSciccor = require("./img/rock-paper-scissors-hand-icons/scissors.jpg");
  return (
    <div style={{ display: !props.display && "none" }}>
      <p>Take your pick</p>

      <button className="imgbutton" onClick={() => props.onClick()}>
        <img id="rock" src={imageRock} alt="rock.jpg" />
      </button>
      <button className="imgbutton" onClick={() => props.onClick()}>
        <img id="paper" src={imagePaper} alt="paper.jpg" />
      </button>
      <button className="imgbutton" onClick={() => props.onClick()}>
        <img id="scissor" src={imageSciccor} alt="scissors.jpg" />
      </button>
    </div>
  );
};
export default ShowPicks;
