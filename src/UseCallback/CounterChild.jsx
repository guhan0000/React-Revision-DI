import React from "react";

const CounterChild = ({ handleClick }) => {
  console.log("child rendered");
  // alert("child render");

  return (
    <div>
      CounterChild
      <button onClick={handleClick}>childButton</button>
    </div>
  );
};

export default CounterChild;
