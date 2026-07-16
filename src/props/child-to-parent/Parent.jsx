import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);
  function sendMsg(msg) {
    alert(msg);
  }
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div>Parent</div>
      <h2>{count}</h2>
      <Child recieve={sendMsg} increase={increment} />
    </>
  );
};

export default Parent;
