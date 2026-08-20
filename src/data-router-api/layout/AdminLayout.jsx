import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="container">
      <aside>
        <h4>Admin Menu</h4>
        <ul>
          <li>
            <Link to={"product"}>Product</Link>
          </li>
        </ul>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
