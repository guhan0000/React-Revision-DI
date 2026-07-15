import React from "react";
import Child2 from "./Child2";

const Child = ({ greet }) => {
  return (
    <>
      <div>Child</div>
      <button onClick={greet}>click</button>
      <Child2 jsxProps={<h1 style={{ color: "blue" }}>JSX as Props</h1>} />
    </>
  );
};

export default Child;
