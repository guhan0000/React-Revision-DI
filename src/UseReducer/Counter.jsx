import React, { useReducer } from "react";
function reducer(state, action) {
  //   let payload = action.payload ? action.payload : 1; wrong results when 0
  const payload = action.payload ?? 1; // ?? nullish coalescing uses 1 when action.payload is null or undefined
  switch (action.type) {
    case "increment":
      return state + payload;
    case "decrement":
      return state - payload;
    case "reset":
      return 0;
    default:
      return state;
  }
}
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <div>Counter</div>
      <h4>{state}</h4>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment", payload: 5 })}>
        +5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Counter;
