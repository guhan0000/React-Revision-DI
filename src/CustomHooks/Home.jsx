import React from "react";
import useInput from "./hooks/useInput";

const Home = () => {
  const email = useInput("");
  const password = useInput("");
  return (
    <>
      <h3>Home</h3>
      <input type="text" placeholder="enter email" {...email} />
      <input type="text" placeholder="enter password" {...password} />
      <button
        onClick={() => {
          email.reset();
          password.reset();
        }}
      >
        reset
      </button>
    </>
  );
};

export default Home;
