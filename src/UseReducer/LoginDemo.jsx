import React, { useEffect, useReducer } from "react";
function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return { ...state, user: payload };
    case "LOGIN_FAILURE":
      return { ...state, user: null, error: payload };
    default:
      return state;
  }
}
const LoginDemo = () => {
  const initialState = { loading: false, user: null, error: "" };
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    console.log(state);
  }, [state]);
  return (
    <>
      <div>LoginDemo</div>
      <h1>{state.user}</h1>
      <h1>{state.error}</h1>
      <button
        onClick={() => {
          dispatch({ type: "LOGIN_SUCCESS", payload: "Guhan" });
          // console.log(state);
        }}
      >
        login
      </button>

      <button
        onClick={() => {
          dispatch({ type: "LOGIN_FAILURE", payload: "Invalid Credentials" });
          // console.log(state);
        }}
      >
        Fail
      </button>
    </>
  );
};

export default LoginDemo;
