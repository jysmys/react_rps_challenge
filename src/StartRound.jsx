import React from "react";

const StartRound = (props) => {
  const start = (
    <div className="startround">
      <button id="startround" onClick={props.onButtonStartRound}>
        <p id="roundbutton">Start round</p>
      </button>
    </div>
  );
  return (
    <div>
      {props.display && props.winner === "" && start}
      {props.winner !== "" && (
        <div id="winner">{props.winner} wins this round...</div>
      )}
    </div>
  );
};
export default StartRound;
