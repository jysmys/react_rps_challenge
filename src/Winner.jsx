import React from "react";
// import { getComputerChoise } from "./helpers/getComputerChoise";
import { announceRoundWinner } from "./helpers/announceRoundWinner";
// import { Countdown } from "./components/Countdown";

const Winner = (props) => {
  return (
    <>
      <div>
        <div className="roundwinner">
          {/* {announceRoundWinner(props.id, getComputerChoise())} */}
        </div>
      </div>
    </>
  );
};
export default Winner;
