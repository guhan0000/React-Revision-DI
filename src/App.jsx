import React, { useState } from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./lazy-loading/pages/Navbar";
import SortProducts from "./dummyJSON/SortProducts";
const Home = lazy(() => import("./lazy-loading/pages/Home"));
const About = lazy(() => import("./lazy-loading/pages/About"));
const Dashboard = lazy(() => import("./CustomHooks/Dashboard"));
const Contact = lazy(() => import("./lazy-loading/pages/Contact"));

function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
      {show && (
        <Suspense fallback={<h1>Loading Products...</h1>}>
          <Dashboard />
        </Suspense>
      )}
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Load
      </button>
      <SortProducts />
    </>
  );
}

export default App;
