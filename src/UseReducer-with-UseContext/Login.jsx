import React, { useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(AuthContext);
  const [redirect, setRedirect] = useState(false);
  function handleLogin() {
    dispatch({ type: "LOGIN_SUCCESS", payload: "Guhan" });
    setRedirect(true);
    setTimeout(() => {
      navigate("/profile");
    }, 2000);
  }
  function handleFailedLogin() {
    dispatch({ type: "LOGIN_FAILURE", payload: "Invalid Credentials" });
  }
  return (
    <>
      <h3>Login</h3>
      {redirect && <h3>Redirecting to profile...</h3>}

      <h2>{state.msg}</h2>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleFailedLogin}>Fail</button>
    </>
  );
};

export default Login;
