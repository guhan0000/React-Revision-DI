import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Home from "./pages/Home";
import PaginationDemo from "./pagination/PaginationDemo";
import ColorChange from "./UseState/ColorChange";
import Counter from "./UseState/Counter";
import MovieCard from "./pages/MovieCard";
import ProdList from "./conditionalRendering/ProdList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-success">React-Revision</h1>
      <ProdList />
    </>
  );
}

export default App;
