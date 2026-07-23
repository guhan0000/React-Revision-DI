import React, { useMemo, useState } from "react";

const ExpensiveCalculation = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(1);
  console.log("render");
  const expensiveValue = useMemo(() => {
    return calculate(num);
  }, [num]);
  function calculate(num) {
    let sum = 0;
    for (let i = 0; i < num; i++) {
      sum += num;
    }
    return sum;
  }
  return (
    <>
      <div>ExpensiveCalculation</div>
      <h1>{count}</h1>
      <h2>{expensiveValue}</h2>
      <input type="number" onChange={(e) => setNum(Number(e.target.value))} />
      <button onClick={() => setCount(count + 1)}>+</button>
    </>
  );
};

export default ExpensiveCalculation;
