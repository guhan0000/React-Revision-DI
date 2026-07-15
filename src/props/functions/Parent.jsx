import React from "react";
import Child from "./Child";
import Spread from "./Spread";

const course = { courseName: "React.js", duration: 6 };
const Parent = () => {
  function greet() {
    alert("Hello");
  }
  return (
    <>
      <div>Parent</div>
      <Child greet={greet} />
      <Spread {...course} />
    </>
  );
};

export default Parent;
