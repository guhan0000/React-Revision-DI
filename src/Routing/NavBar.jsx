import React from "react";
import { Link, useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <h4 style={{ textAlign: "center" }}>Navbar</h4>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "15px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <button
            onClick={() => {
              navigate("/logout");
            }}
          >
            logout
          </button>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
