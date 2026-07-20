import React, { useEffect, useState } from "react";
import Child from "./Child";
// render occur when
// 1. state changes
// 2. props changes
// 3 . parent renders -> child also renders
const Demo1 = () => {
  const [count, setCount] = useState(0);
  //   useEffect(() => {
  //     console.log("component rendered");
  //   });
  console.log(" render");

  return (
    <>
      <div>Demo1</div>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
          // setCount(count); // DOM != Render here dom triggered but state didnt change during reconcilation so re render didnt occur
        }}
      >
        cilck
      </button>
      <Child count={count} />
    </>
  );
};

export default Demo1;
