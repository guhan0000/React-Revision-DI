import React from "react";

const ProductCard = ({ children }) => {
  return (
    <div
      style={{
        border: "2px solid green",
        backgroundColor: "beige",
        color: "green",
      }}
    >
      {children.map((p) => (
        <div key={p.id}>
          <p>{p.title}</p>
          <p>{p.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
