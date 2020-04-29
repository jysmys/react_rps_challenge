import * as React from "react";
// import { winner } from "./helpers/winner";
//https://codesandbox.io/s/simple-react-countdown-timer-zyfr0?file=/src/index.tsx:32-67

export const Roundwinner = () => {
  return "Computer WINS";
};

const Countdown = (props) => {
  // const roundwinner = winner;
  const [counter, setCounter] = React.useState(5);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <div
        className="countdown"
        style={{ display: !props.countdown && "none" }}
      >
        <div>{counter}</div>
      </div>
      {counter === 0 && (
        <div className="roundwinner">
          <Roundwinner />
        </div>
      )}
    </div>
  );
};
export default Countdown;
