import React, { useState } from "react";

const Text = () => {
  const [hide, setHide] = useState(false);
  //   const msg = "SHOW";
  function handleClick() {
    // setHide((prev) => (prev === true ? false : true));
    setHide((prev) => !prev);
  }
  return (
    <div>
      {!hide && <h1>Hi</h1>}
      <button onClick={handleClick}>{hide === true ? "SHOW" : "HIDE"}</button>
    </div>
  );
};

export default Text;
