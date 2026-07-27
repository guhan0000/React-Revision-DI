import React from "react";

const CounterChild = (props) => {
  console.log("child rendered");
  console.log(props);

  return (
    <div>
      CounterChild
      <button onClick={props.handleClick}>childButton{props.count}</button>
    </div>
  );
};

export default CounterChild;
