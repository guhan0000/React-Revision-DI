import React, { useCallback, useEffect, useState } from "react";

const UserFetch = () => {
  const [users, setUsers] = useState([]);
  const fetchUser = useCallback(() => {
    (async () => {
      let response = await fetch("https://dummyjson.com/users");
      let data = await response.json();
      setUsers(data.users);
    })();
  }, []);
  useEffect(() => {
    // this will cause infite loops without callbacked function
    //
    console.log("fetching");
    fetchUser();
    console.log(users);
  }, [fetchUser]);
  console.log(users);

  return <div>UserFetch</div>;
};

export default UserFetch;
