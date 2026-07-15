import React from "react";

const Default = ({ name = "guhan", age = "18" }) => {
  return <div>hello {name - age}</div>;
};

export default Default;
