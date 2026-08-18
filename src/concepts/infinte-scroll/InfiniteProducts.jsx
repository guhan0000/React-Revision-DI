import React, { useEffect, useRef, useState } from "react";

const InfiniteProducts = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const loaderRef = useRef(null);

  const limit = 20;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const skip = (page - 1) * limit;

        const response = await fetch(
          `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        );

        const data = await response.json();

        setProducts((prev) => [...prev, ...data.products]);

        if (data.products.length < limit) {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      {
        threshold: 1,
      },
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading, hasMore]);

  return (
    <div className="container mt-4">
      <h1>Products</h1>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <img
                src={product.thumbnail}
                className="card-img-top"
                alt={product.title}
              />

              <div className="card-body">
                <h5>{product.title}</h5>

                <p>${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <div ref={loaderRef} className="text-center p-4">
          {loading && "Loading..."}
        </div>
      )}

      {!hasMore && <h4 className="text-center">No more products</h4>}
    </div>
  );
};

export default InfiniteProducts;
