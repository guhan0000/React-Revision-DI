import React from "react";

const Child = ({ recieve, increase }) => {
  return (
    <>
      <div>Child</div>
      <button onClick={() => recieve("Hi from Child")}>Send Msg</button>
      <button onClick={() => increase()}>+</button>
    </>
  );
};

export default Child;
