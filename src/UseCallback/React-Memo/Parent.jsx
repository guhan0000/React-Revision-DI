import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  console.log("parent render");

  const [count, setCount] = useState(0);
  return (
    <>
      <h3>Parent</h3>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Child />{" "}
      {/*without React.memo() in child component child component also render if count change and even though no prop change on Child component  */}
    </>
  );
}
