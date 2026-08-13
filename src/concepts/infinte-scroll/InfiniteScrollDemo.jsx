import React, { useEffect, useState } from "react";

const InfiniteScrollDemo = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 20;
  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        const skip = (page - 1) * limit;
        const response = await fetch(
          `https://dummyjson.com/products/?limit=${limit}&skip=${skip}`,
        );
        const data = await response.json();
        setProducts((prev) => [...prev, ...data.products]);
        if (data.products.length < limit) {
          setHasMore(false);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, [page]);
  useEffect(() => {
    async function handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (
        scrollTop + windowHeight >= documentHeight - 300 &&
        !loading &&
        hasMore
      ) {
        setPage((prev) => prev + 1);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div className="mt-4 col-md-3" key={product.id}>
            <div className="card">
              <img src={product.thumbnail} alt={product.title} />
              <div className="card-body">
                <h4>{product.title}</h4>
                <h5>${product.price}</h5>
              </div>
            </div>
          </div>
        ))}
        {loading && <h4 className="text-center">Loading..</h4>}
        {!hasMore && <h4 className="text-center">No More Products</h4>}
      </div>
    </>
  );
};

export default InfiniteScrollDemo;
