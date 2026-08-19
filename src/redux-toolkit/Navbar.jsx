import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartLength = cartItems.reduce((sum, item) => (sum += item.quantity), 0);
  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);
  return (
    <div>
      <h3>Navbar</h3>
      <h2>{cartLength}</h2>
    </div>
  );
};

export default Navbar;
