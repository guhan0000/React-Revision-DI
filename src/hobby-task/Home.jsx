import React from "react";
import bgm from "../assets/Coolie DISCO.mp3";

const Home = () => {
  return (
    <div>
      Home
      <button>enter</button>
      <audio autoPlay controls muted>
        <source src={bgm} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default Home;
