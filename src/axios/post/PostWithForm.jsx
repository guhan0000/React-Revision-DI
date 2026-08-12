import axios from "axios";
import React, { useState } from "react";

const PostWithForm = () => {
  const [mediaType, setMediaType] = useState("");
  const [mediaId, setMediaId] = useState("");
  const requestBody = {
    media_type: mediaType,
    media_id: Number(mediaId),
    watchlist: true,
  };
  async function addToWatchList(requestBody) {
    try {
      console.log(requestBody);
      console.log("before axios");

      const response = await axios.post(
        "https://api.themoviedb.org/3/account/22562184/watchlist",
        requestBody,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2U0NzJlYTZhZDI0M2NlMzFkNmVhYTYzOTJkMTNhOSIsIm5iZiI6MTc2NTk3NTUzNS4zOCwic3ViIjoiNjk0MmE1ZWZjOWFlOGFjYjY2ZDczYThhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.f1gALcu6ASBkv-yFTdNSqq9acwe1wjlleAxwq_gF3EQ",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        },
      );
      console.log("after axios");
      console.log("Status:", response.status);
      console.log("Data:", response.data);

      console.log(response.data);
    } catch (err) {
      console.log("Axios request failed");

      console.log("Error:", err);
      console.log("Status:", err.response?.status);
      console.log("Data:", err.response?.data);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    addToWatchList(requestBody);
    console.log("button clicked");
  }
  return (
    <>
      <div>PostWithForm</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="media type ex.movie"
          onChange={(e) => setMediaType(e.target.value)}
        />
        <input
          type="text"
          placeholder="media id"
          onChange={(e) => setMediaId(e.target.value)}
        />
        <button>add to watchlist</button>
      </form>
    </>
  );
};

export default PostWithForm;
