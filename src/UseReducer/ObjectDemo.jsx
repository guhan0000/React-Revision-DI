import React, { useReducer, useState } from "react";
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "changeName":
      return { ...state, firstName: (state.firstName = action.payload) };
    default:
      return state;
  }
}

const ObjectDemo = () => {
  const obj = { count: 0, firstName: "Guhan" };
  const [firstName, setFirstName] = useState("");
  const [state, dispatch] = useReducer(reducer, obj);
  return (
    <>
      <div>ObjectDemo</div>
      <h1>Name: {state.firstName}</h1>
      <h1>Count: {state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => setFirstName(e.target.value)}
        value={firstName}
      />
      <button
        onClick={() => {
          dispatch({ type: "changeName", payload: firstName });
          //   setFirstName("");
        }}
      >
        change name
      </button>
    </>
  );
};

export default ObjectDemo;
