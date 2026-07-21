import React, { useRef, useState } from "react";

const Counter = () => {
  const countRef = useRef(0);
  const [, forceRender] = useState(0); // state var is hidden not used

  //   console.log(countRef);

  return (
    <>
      <div>Counter</div>
      <button
        onClick={() => {
          countRef.current++;
          forceRender((prev) => prev + 1);
          console.log(countRef.current);
        }}
      >
        +
      </button>
      <h1>{countRef.current}</h1>
    </>
  );
};

export default Counter;
