import React, { useEffect, useState } from "react";

const SortProducts = () => {
  const [result, setResult] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=200&sortBy=rating&order=desc")
      .then((res) => res.json())
      .then((data) => setResult(data.products));
  }, []);
  return (
    <div>
      SortProducts
      {result.map((product) => (
        <h4 key={product.id}>{product.title + " -- " + product.rating}</h4>
      ))}
    </div>
  );
};

export default SortProducts;
