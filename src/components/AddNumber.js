import React from "react";

const AddNumber = ({ setPlus, setMinus, onSetParam, param, setPlusAsync }) => {
  const onChange = (e) => {
    onSetParam(Number(e.target.value));
  };

  return (
    <div>
      <h1>AddNumber</h1>
      <input type="button" value="+" onClick={setPlus} />
      <input type="button" value="-" onClick={setMinus} />
      <input type="number" value={param} onChange={onChange} />
    </div>
  );
};

export default AddNumber;
