import React, { useState } from "react";
import AddUser from "./axios/post/AddUser";
import UpdateUser from "./axios/put/UpdateUser";
import UpdateCity from "./axios/patch/UpdateCity";

function App() {
  return (
    <>
      <UpdateCity/>
    </>
  );
}
export default App;
