import React from "react";
import axios from "axios";
const GetProducts = () => {
  async function getAllProducts() {
    const response = await axios.get("https://dummyjson.com/products");
    console.log(response);
    console.log(response.status);
    console.log(response.data);
  }
  getAllProducts();
  async function addMovie(movie) {
    
  }

  return <div>GetProducts</div>;
};

export default GetProducts;
