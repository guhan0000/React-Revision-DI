import React, { useMemo, useState } from "react";

const Random = () => {
  const [count, setCount] = useState(0);
  const random = useMemo(() => {
    return Math.random();
  }, []);
  return (
    <>
      <div>Random</div>
      <h1>{random}</h1>
      <h1>{count}</h1>

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

export default Random;
