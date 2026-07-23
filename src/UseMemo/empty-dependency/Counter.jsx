import React, { useMemo, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const computedValue = useMemo(() => {
    console.log("useMemo render");

    return 10 + 20;
  }, []);
  console.log("rendering");

  return (
    <>
      <div>Counter</div>
      <h1>{count}</h1>
      {/* <h2>{computedValue}</h2> */}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
};

export default Counter;
