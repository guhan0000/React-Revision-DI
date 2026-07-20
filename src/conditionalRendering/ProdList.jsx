import React, { useEffect, useState } from "react";

const ProdList = () => {
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
  return (
    <>
      <div>ProdList</div>
      {products.map((product, index) => {
        return (
         ( product.title.startsWith("C") &&  product.title.endsWith("e")) && <h3 key={index}>{product.title}</h3>
        );
      })}
    </>
  );
};

export default ProdList;
