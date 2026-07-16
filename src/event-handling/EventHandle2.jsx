import React from "react";

const EventHandle2 = () => {
  const fruits = ["apple", "orange", "mango", "grapes"];
  function handleClick(event) {
    console.log(fruits.indexOf(event.target.innerText));
  }
  return (
    <>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index} onClick={handleClick}>
            {fruit}
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventHandle2;
