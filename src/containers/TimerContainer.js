import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Timer from "../components/Timer";
import { setTime } from "../modules/timer";

const TimerContainer = () => {
  const { time } = useSelector((state) => ({
    time: state.time,
  }));

  const dispatch = useDispatch();

  const timerStart = () => dispatch(setTime());

  return <Timer time={time} timerStart={timerStart} />;
};

export default TimerContainer;
