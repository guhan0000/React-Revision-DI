import React from "react";
import { useOutletContext } from "react-router-dom";

const AdminDashboard = () => {
  const user = useOutletContext();
  return (
    <div>
      <h5>AdminDashboard</h5>
      <h6>Hi {user.userName}</h6>
    </div>
  );
};

export default AdminDashboard;
