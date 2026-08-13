import React, { useState, useEffect, useRef } from "react";

const InfiniteScrollIntersectionObserver = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const limit = 20;
  const loadRef = useRef(null);
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
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 },
    );
    if (loadRef.current) {
      observer.observe(loadRef.current);
    }
    return () => {
      observer.disconnect();
    };
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
        {hasMore && (
          <div
            className="col-12 text-center p-4"
            ref={loadRef}
            style={{ height: "50px" }}
          >
            {loading && "Loading..."}
          </div>
        )}
        {!hasMore && <h4 className="text-center">No More Products</h4>}
      </div>
    </>
  );
};

export default InfiniteScrollIntersectionObserver;
