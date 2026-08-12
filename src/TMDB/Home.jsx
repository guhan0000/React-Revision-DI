import React, { useState } from "react";
import { useEffect } from "react";
const Home = () => {
  const [result, setResult] = useState([]);
  const url =
    "https://api.themoviedb.org/3/trending/movie/day?language=en-US   ";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2U0NzJlYTZhZDI0M2NlMzFkNmVhYTYzOTJkMTNhOSIsIm5iZiI6MTc2NTk3NTUzNS4zOCwic3ViIjoiNjk0MmE1ZWZjOWFlOGFjYjY2ZDczYThhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.f1gALcu6ASBkv-yFTdNSqq9acwe1wjlleAxwq_gF3EQ",
    },
  };

  useEffect(() => {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.results);
      })
      .catch((err) => console.log(err));
    console.log(result);
  }, []);
  return (
    <>
      <div>Home</div>

      {result.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.original_title}</h1>
          <img
            // src={`https://tmdb.org/t/p/w780${movie.poster_path}`}
            src="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@.jpg"
            alt={movie.poster_path}
            width="250px"
            height="400px"
          />
        </div>
      ))}
    </>
  );
};

export default Home;
