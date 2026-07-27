import { useEffect, useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.log(err));
  }, []);
  return users;
};
export default useUsers;
