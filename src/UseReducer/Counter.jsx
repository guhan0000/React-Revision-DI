import React, { useReducer } from "react";

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return (state = 0);
    }
  }
  return (
    <>
      <div>Counter</div>
      <h4>{state}</h4>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Counter;
