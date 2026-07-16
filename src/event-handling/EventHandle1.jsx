import React from "react";

const EventHandle1 = () => {
  const handleCheck = (event) => {
    event.target.checked ? console.log("checked") : console.log("unchecked");
  };
  return (
    <>
      <div>EventHandle1</div>
      <input
        type="text"
        name=""
        id=""
        onChange={(event) => {
          console.log(event.target.value);
        }}
      />
      <button>click</button>
      <br />
      <label htmlFor="c1">HTML</label>
      <input
        type="checkbox"
        name="HTML"
        id="c1"
        value={"html"}
        onChange={handleCheck}
      />
      <br />
      <label htmlFor="c2">CSS</label>
      <input type="checkbox" name="CSS" id="c2" value={"css"} />
      <br />
      <label htmlFor="c3">JavaScript</label>
      <input type="checkbox" name="JS" id="c3" value={"javascript"} />
    </>
  );
};

export default EventHandle1;
