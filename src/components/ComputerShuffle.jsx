import React from "react";
import "../css/ComputerShuffle.css";

const ComputerShuffle = (props) => {
  return (
    <div className="computerspick" id="computer">
      <h6>Computers pick ???</h6>
      <img className="dynamicImage" src={props.imgString} alt=".jpg" />
    </div>
  );
};
export default ComputerShuffle;
