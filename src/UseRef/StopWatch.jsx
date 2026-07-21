import React, { useRef, useState } from "react";

const StopWatch = () => {
  const timer = useRef(null);
  // let timer = null;
  const [count, setCount] = useState(0);

  function start() {
    timer.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 50);
  }
  function stop() {
    clearInterval(timer.current);
  }
  return (
    <>
      <div>StopWatch</div>
      <h1>{count}</h1>
      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={() => setCount(0)}>reset</button>
    </>
  );
};

export default StopWatch;
