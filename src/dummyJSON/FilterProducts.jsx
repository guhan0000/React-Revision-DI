import React, { useState, useEffect } from "react";

const FilterProducts = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/groceries`)
      .then((res) => res.json())
      .then((data) => setResult(data.products));
  }, []);
  return (
    <div>
      FilterProducts
      {result.map((product) => (
        <h4 key={product.id}>{product.title + " -- " + product.category}</h4>
      ))}
    </div>
  );
};

export default FilterProducts;
