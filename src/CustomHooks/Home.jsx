import React from "react";
import useUsers from "./hooks/useUsers";

const Home = () => {
  const users = useUsers();
  return (
    <div>
      Home
      {users.map((user) => (
        <h3 key={user.id}>{user.firstName + " " + user.lastName}</h3>
      ))}
    </div>
  );
};

export default Home;
