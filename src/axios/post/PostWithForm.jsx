import axios from "axios";
import React, { useState } from "react";

const PostWithForm = () => {
  const BASE_URL = import.meta.env.VITE_TMDB_API;
  const ACCOUNT_ID = import.meta.env.VITE_TMDB_ACCOUNT_ID;
  const TOKEN = import.meta.env.VITE_TMDB_TOKEN;
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
        `${BASE_URL}/account/${ACCOUNT_ID}/watchlist`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
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
