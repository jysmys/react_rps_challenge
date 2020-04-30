import React from "react";

const StartRound = (props) => {
  return (
    <div className="startround">
      <button id="startround" onClick={props.onButtonStartRound}>
        <p id="roundbutton">Start round</p>
      </button>
    </div>
  );
};
export default StartRound;
