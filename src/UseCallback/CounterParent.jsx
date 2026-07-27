import React, { useState } from "react";
import CounterChild from "./CounterChild";

const CounterParent = () => {
  console.log("parent rendered");

  const [count, setCount] = useState(0);
  const handleClick = () => {
    console.log("handleClick");
  };
  return (
    <div>
      CounterParent
      <button
        onClick={() => {
          setCount(count + 1);
          //   console.log("render");
        }}
      >
        +
      </button>
      <h2>{count}</h2>
      <CounterChild handleClick={handleClick} count={count} />
    </div>
  );
};

export default CounterParent;
