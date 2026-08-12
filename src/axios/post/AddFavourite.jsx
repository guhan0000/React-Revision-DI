import axios from "axios";
import React from "react";

const AddFavourite = () => {
  const fav = { media_type: "movie", media_id: 500, favorite: true };
  const reqestBody = JSON.stringify(fav);
  async function addFavourite() {
    const response = await axios.post(
      "https://api.themoviedb.org/3/account/22562184/favorite",
      fav,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2U0NzJlYTZhZDI0M2NlMzFkNmVhYTYzOTJkMTNhOSIsIm5iZiI6MTc2NTk3NTUzNS4zOCwic3ViIjoiNjk0MmE1ZWZjOWFlOGFjYjY2ZDczYThhIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.f1gALcu6ASBkv-yFTdNSqq9acwe1wjlleAxwq_gF3EQ",
          "Content-Type": "application/json",
          accept: "application/json",
        },
      },
    );
    console.log(response.data);
  }
  addFavourite();
  return <div>AddFavourite</div>;
};

export default AddFavourite;
