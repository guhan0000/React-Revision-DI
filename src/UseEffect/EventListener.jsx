import React, { useEffect } from "react";

const EventListener = () => {
  useEffect(() => {
    function resize() {
      console.log(window.innerWidth);
    }
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  },[]);
  return <div>EventListener</div>;
};

export default EventListener;
