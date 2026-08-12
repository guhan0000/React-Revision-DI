import axios from "axios";
import React from "react";

const Login = () => {
  const login = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2U0NzJlYTZhZDI0M2NlMzFkNmVhYTYzOTJkMTNhOSIsIm5iZiI6MTc2NTk3NTUzNS4zOCwic3ViIjoiNjk0MmE1ZWZjOWFlOGFjYjY2ZDczYThhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.f1gALcu6ASBkv-yFTdNSqq9acwe1wjlleAxwq_gF3EQ",
          accept: "application/json",
        },
      },
    );
    console.log(response.data);
  };
  login();
  return <div>Login</div>;
};

export default Login;
