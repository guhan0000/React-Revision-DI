import React from "react";
import useWidth from "./hooks/useWidth";

const Dashboard = () => {
  const width = useWidth();
  return <div>{width}</div>;
};

export default Dashboard;
