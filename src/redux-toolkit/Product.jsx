import React from "react";
import { Milk } from "./prods/Milk";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/slice/cart/cartSlice";
import { useState, useEffect } from "react";
const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    function getProdList() {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((data) => {
          setProducts(data.products);
          console.log(data.products);
        })
        .catch((err) => console.log(err));
    }
    getProdList();
  }, []);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>Product</h3>
      {products.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.title}</h3>
          <button
            onClick={() => {
              dispatch(addToCart(prod));
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Product;
