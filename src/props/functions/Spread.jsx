import React from "react";

const Spread = ({ duration, courseName }) => {
  return (
    <>
      <div>Spread</div>
      <ul>
        <li>{duration}</li>
        <li>{courseName}</li>
      </ul>
    </>
  );
};

export default Spread;
