import React from "react";

const StartRound = (props) => {
  return (
    <div>
      <button
        id="startround"
        onClick={props.onButtonStartRound}
        style={{ display: !props.display && "none" }}
      >
        <p id="roundbutton">Start round</p>
      </button>
    </div>
  );
};
export default StartRound;
