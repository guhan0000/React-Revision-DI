import React from "react";
import { Link, Outlet } from "react-router-dom";
const user = { userName: "Guhan", role: "admin" };
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
        <Outlet context={user} />
      </main>
    </div>
  );
};

export default AdminLayout;
