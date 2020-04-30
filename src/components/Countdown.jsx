import React, { useEffect, useState } from "react";
//https://codesandbox.io/s/simple-react-countdown-timer-zyfr0?file=/src/index.tsx:32-67

export const Countdown = () => {
  const [counter, setCounter] = useState(3);
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div>
      <div className="countdown">
        <div>{counter}</div>
      </div>
    </div>
  );
};
// export default Countdown;
