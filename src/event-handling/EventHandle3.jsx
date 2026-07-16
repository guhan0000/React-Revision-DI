import React, { useState } from "react";
import styles from "./EventHandle3.module.css";

const EventHandle3 = () => {
  const [theme, setTheme] = useState("");
  const handleMouseEnter = () => {
    console.log("mouse entered");
    setTheme("enter");
  };
  const handleMouseLeave = () => {
    console.log("mouse left");
    setTheme("left");
  };
  const handleDoubleClick = () => {
    alert("Double Clicked");
  };
  return (
    <div
      style={{ width: "400px", height: "500px", border: "4px dotted green" }}
      className={styles[theme]}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onDoubleClick={handleDoubleClick}
      
    >
        <input type="text" onKeyDown={(event)=>console.log(event.key)
      } />
    </div>
  );
};

export default EventHandle3;
