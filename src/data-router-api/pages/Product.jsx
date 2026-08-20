import React from "react";
import { Link } from "react-router-dom";
const productList = [
  { id: 1, title: "watch", price: 500 },
  { id: 2, title: "Shoe", price: 300 },
  { id: 3, title: "Mobile", price: 10000 },
];
const Product = () => {
  return (
    <>
      <h3>Products</h3>
      {productList.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <h4>{product.price}</h4>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </>
  );
};

export default Product;
