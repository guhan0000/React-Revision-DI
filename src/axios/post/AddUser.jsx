import axios from "axios";
import React, { useState } from "react";

const AddUser = () => {
  const [result, setResult] = useState(null);
  const [user, setUser] = useState({});
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUser = async () => {
    try {
      const response = await axios.post(
        "https://ca4a1c7df202b193b845.free.beeceptor.com/api/users/",
        user,
      );
      setResult(response);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(user);
    addUser();
  };

  return (
    <>
      <div>AddUser</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="userName"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="phone"
          name="phone"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
        />
        <button>Register</button>
      </form>
      {/* result && result.status===200 && <></> */}
      {result?.status === 200 && (
        <div>
          <h3>{result.data.id}</h3>
          <h3>{result.data.userName}</h3>
        </div>
      )}
    </>
  );
};

export default AddUser;
// 2d444ba16cfd92f656fc
// Dhanasekar
