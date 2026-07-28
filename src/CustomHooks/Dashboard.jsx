import React from "react";
import useFetch from "./hooks/useFetch";

const Dashboard = () => {
  const BASE_URL = "https://dummyjson.com/";
  const END_POINT = "users";
  const { loading, data, error } = useFetch(BASE_URL + END_POINT);
  // console.log(loading);
  // console.log(data);
  // console.log(error);
  // console.log(data[END_POINT]);

  return (
    <>
      {loading && <h1>Loading....</h1>}
      {error && <h1>{error}</h1>}
      {data?.[END_POINT]?.map((item) => (
        <h3 key={item.id}>{item.firstName}</h3>
      ))}
    </>
  );
};

export default Dashboard;
