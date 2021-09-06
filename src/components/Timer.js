import React from "react";

const Timer = ({ time, timerStart }) => {
  console.log(time);
  return (
    <div>
      <h1>TIMER</h1>
      <button onClick={timerStart}>Start</button>
    </div>
  );
};

export default Timer;
