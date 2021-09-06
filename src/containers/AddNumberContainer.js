import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddNumber from "../components/AddNumber";
import { plus, minus, setParam } from "../modules/addNumber";

const AddNumberContainer = () => {
  const { param } = useSelector((state) => ({
    param: state.param,
  }));

  const dispatch = useDispatch();

  const setPlus = () => dispatch(plus());
  const setMinus = () => dispatch(minus());
  const onSetParam = (param) => {
    dispatch(setParam(param));
  };

  return (
    <AddNumber
      setPlus={setPlus}
      setMinus={setMinus}
      onSetParam={onSetParam}
      param={param}
    />
  );
};

export default AddNumberContainer;
