import React, { useState } from "react";

const ColorChange = () => {
  const [color, setColor] = useState("");
  return (
    <>
      <div>ColorChange</div>
      <input
        type="text"
        name=""
        id=""
        placeholder="enter color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <h3 style={{ color: color }}>{color}</h3>
    </>
  );
};

export default ColorChange;
