import React from "react";

const StartRound = (props) => {
  const start = (
    <div className="startround">
      <button id="startround" onClick={props.onButtonStartRound}>
        <p id="roundbutton">Start round</p>
      </button>
    </div>
  );
  // const winnerTag = <div id="winner">Winner is {props.winner}!</div>;
  console.log(props.winner);
  return (
    <div>
      {props.display && props.winner === "" && start}
      {props.winner !== "" && <div id="winner">{props.winner}!</div>}
    </div>
  );
};
export default StartRound;
