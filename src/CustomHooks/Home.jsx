import React from "react";
import useInput from "./hooks/useInput";

const Home = () => {
  const { reset: emailReset, ...emailProps } = useInput("");
  const { reset: passwordReset, ...passwordProps } = useInput("");
  console.log(emailProps);
  console.log(emailReset);
  console.log(passwordProps);
  console.log(passwordReset);

  return (
    <>
      <h3>Home</h3>
      <input type="text" placeholder="enter email" {...emailProps} />
      <input type="password" placeholder="enter password" {...passwordProps} />
      <button
        onClick={() => {
          emailReset();
          passwordReset();
        }}
      >
        reset
      </button>
    </>
  );
};

export default Home;
