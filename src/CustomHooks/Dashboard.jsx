import React from "react";
import useUsers from "./hooks/useUsers";

const Dashboard = () => {
  const users = useUsers();
  return (
    <div>
      Dashboard
      {users.length}
    </div>
  );
};

export default Dashboard;
