import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <nav>
        <h4>Main Layout</h4>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>
        <h3>© 2026 My App</h3>
      </footer>
    </>
  );
};

export default MainLayout;
