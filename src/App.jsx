import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./lazy-loading/pages/Navbar";
const Home = lazy(() => import("./lazy-loading/pages/Home"));
const About = lazy(() => import("./lazy-loading/pages/About"));
const Contact = lazy(() => import("./lazy-loading/pages/Contact"));
function App() {
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
    </>
  );
}

export default App;
