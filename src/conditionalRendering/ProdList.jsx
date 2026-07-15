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
        if (product.title.startsWith("C")) {
          console.log(product.title);

          return <h1>{product.title}</h1>;
        }
      })}
    </>
  );
};

export default ProdList;
