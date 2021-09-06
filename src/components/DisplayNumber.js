import { useState } from "react";

const DisplayNumber = ({ result, color }) => {
  // console.log(result);
  // console.log(color);
  return (
    <div className="Red">
      <h1 style={{ color: color }}>DisplayNumber</h1>
      <input type="number" value={result} />
    </div>
  );
};

export default DisplayNumber;
