import React from "react";

const Child = ({ count }) => {
  console.log("child render");

  return (
    <>
      <div>Child</div>
      <h2>{count}</h2>
    </>
  );
};

export default Child;
