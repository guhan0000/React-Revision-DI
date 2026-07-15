import React from "react";

const Welcome = ({ user: { name, age } }) => {
  return (
    <>
      <div>Welcome {name}</div>
      {age >= 18 ? (
        <h3>you are eligible to vote</h3>
      ) : (
        <h3>you need to wait for {18 - age} years</h3>
      )}
    </>
  );
};

export default Welcome;
