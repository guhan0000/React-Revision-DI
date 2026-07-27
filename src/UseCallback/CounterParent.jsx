import React, { useCallback, useState } from "react";
import CounterChild from "./CounterChild";

const CounterParent = () => {
  console.log("parent rendered");

  const [count, setCount] = useState(0);
  const handleClick = useCallback(() => {
    console.log(" child handleClick");
  }, []);
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
      <CounterChild handleClick={handleClick} />
    </div>
  );
};

export default CounterParent;
