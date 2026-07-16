import React from "react";

const Card = ({ children }) => {
  return (
    <div style={{ border: "2px solid blue", backgroundColor: "tomato" }}>
      {children}
    </div>
  );
};

export default Card;
