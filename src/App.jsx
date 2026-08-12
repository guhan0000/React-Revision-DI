import React, { useState } from "react";
import GetProducts from "./axios/get/GetProducts";
import Login from "./axios/post/Login";
import AddFavourite from "./axios/post/AddFavourite";
import PostWithForm from "./axios/post/PostWithForm";

function App() {
  return (
    <>
      <AddFavourite />
    </>
  );
}
export default App;
