import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <h4>Navbar</h4>
      <ul style={{ listStyle: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
