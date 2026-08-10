import React, { useEffect, useState } from "react";

const CartOperations = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.log(err));
  }, []);
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  useEffect(() => {
    console.log(cartItems);
    console.log(total);
    console.log(cartCount);
  }, [cartItems, total, cartCount]);
  function addToCart(product) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });

    // console.log(cartItems); react updates state vars in async manner
  }
  function increaseQuantity(id) {
    setCartItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      );
    });
  }
  function decreaseQuantity(id) {
    setCartItems((prevItems) => {
      return prevItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0);
    });
  }
  function removeFromCart(id) {
    setCartItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  }

  // console.log(total);

  return (
    <>
      CartOperations
      {products.map((prod) => (
        <div key={prod.id}>
          <h4 key={prod.id}>{prod.title}</h4>
          <button
            onClick={() => {
              addToCart(prod);
            }}
          >
            add
          </button>
          <button
            onClick={() => {
              increaseQuantity(prod.id);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              decreaseQuantity(prod.id);
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              removeFromCart(prod.id);
            }}
          >
            remove
          </button>
        </div>
      ))}
    </>
  );
};

export default CartOperations;
