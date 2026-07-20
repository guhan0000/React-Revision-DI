import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <div>Timer</div>
      <h3>{count}</h3>
    </>
  );
};

export default Timer;
