import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DisplayNumber from "../components/DisplayNumber";

const DisplayNumberContainer = () => {
  const { result, color } = useSelector((state) => ({
    result: state.result,
    color: state.color,
  }));

  return <DisplayNumber result={result} color={color} />;
};

export default DisplayNumberContainer;
