import React, { useEffect, useState } from "react";

const TitleUpdate = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Count :${count}`;
  }, [count]);
  return (
    <>
      <div>TitleUpdate</div>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </>
  );
};

export default TitleUpdate;
