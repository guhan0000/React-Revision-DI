import React, { useState } from "react";
import Product from "./redux-toolkit/Product";
import Navbar from "./redux-toolkit/Navbar";
import ProdList from "./redux-toolkit/async-thunk/ProdList";

function App() {
  return (
    <>
      <ProdList />
    </>
  );
}
export default App;
