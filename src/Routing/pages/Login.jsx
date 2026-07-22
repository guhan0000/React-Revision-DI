import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  function handleLogin() {
    navigate("/home");
  }
  return (
    <>
      <div>Login</div>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Login;
