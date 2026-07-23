import React, { useEffect, useMemo, useState } from "react";

const Filtering = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);

  const productsWithPriceLessThan5 = useMemo(
    () => products.filter((product) => product.price < 5),
    [products],
  );

  console.log("products", products);
  console.log(productsWithPriceLessThan5);

  return (
    <>
      <h1>Filtering</h1>
      {productsWithPriceLessThan5.map((prod) => (
        <h3 key={prod.id}>{prod.price}</h3>
      ))}
    </>
  );
};

export default Filtering;
