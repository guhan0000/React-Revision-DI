import React, { useState } from "react";
import GetItems from "./axios/get/GetItems";
import DeleteItem from "./axios/delete/DeleteItem";

function App() {
  return (
    <>
      <GetItems />
    </>
  );
}
export default App;
