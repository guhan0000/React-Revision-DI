import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <button
          className="btn btn-success"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            setCount((prev) => (prev > 0 ? prev - 1 : 0));
          }}
        >
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
