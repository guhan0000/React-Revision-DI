import React, { useRef } from "react";

const DomAccess1 = () => {
  const inputRef = useRef();

  return (
    <>
      <h1>DOM access</h1>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.value = "";
        console.log(inputRef.current.value);
        
        }}
      >
        clear
      </button>
    </>
  );
};

export default DomAccess1;
