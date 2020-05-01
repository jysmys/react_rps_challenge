import React from "react";

const ComputerShuffle = (props) => {
  return (
    <div className="computerspick" id="computer">
      <p>Computers pick ???</p>
      <img className="dynamicImage" src={props.imgString} alt=".jpg" />
    </div>
  );
};
export default ComputerShuffle;
