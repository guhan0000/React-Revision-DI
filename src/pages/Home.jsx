import React, { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      let response = await fetch("https://dummyjson.com/products");
      console.log(response.ok);

      if (response.ok) {
        let data = await response.json();
        // console.log(data.products);
        setProducts(data.products);
      }
    };
    getProducts();
  }, []);
  return (
    <>
      <div>Home</div>
      {products.map((product, index) => (
        <div className="card">
          <div className="card-header h-100 w-50">{product.title}</div>
          <div className="card-body">
            <img src={product.thumbnail} alt={product.title} />
          </div>
        </div>
        // <h3 key={index}>{product.title}</h3>
      ))}
    </>
  );
};

export default Home;
