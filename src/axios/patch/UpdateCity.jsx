import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateCity = () => {
  const [result, setResult] = useState(null);
  const reqBody = { city: "Tambaram" };
//   useEffect(() => {
//     updateCity();
//   }, []);
  useEffect(() => {
    console.log("updated result");
    console.log(result);
  }, [result]);
  async function updateCity() {
    const response = await axios.patch(
      "https://caab5df6f6da0bc32896.free.beeceptor.com/8c0656140c053db9a1ff",
      reqBody,
    );
    setResult(response);
    console.log(response);
  }
  return <div>UpdateCity
    <button onClick={()=>{updateCity()}}>update</button>
  </div>;
};

export default UpdateCity;
