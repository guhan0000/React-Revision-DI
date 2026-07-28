import React from "react";
import useInput from "./hooks/useInput";

const Home = () => {
  const email = useInput("");
  const password = useInput("");
  return (
    <>
      <h3>Home</h3>
      <input
        type="text"
        placeholder="enter email"
        value={email.value}
        onChange={email.onChange}
      />
      <input
        type="text"
        placeholder="enter password"
        value={password.value}
        onChange={password.onChange}
      />
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
