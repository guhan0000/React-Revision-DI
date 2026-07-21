import React, { useEffect, useRef, useState } from "react";

const RenderCount = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);
  useEffect(() => {
    renderCount.current++;
  });
  return (
    <>
      <h1>{`Count:${count}`}</h1>
      <h2>{`Render:${renderCount.current}`}</h2>
      <div>RenderCount</div>
      <button onClick={()=>setCount(count+1)}>+</button>
    </>
  );
};

export default RenderCount;
