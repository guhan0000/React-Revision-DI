import React, { useContext } from "react";
import UserContext from "./UserContext";

const BuyButton = () => {
  const user = useContext(UserContext);
  return (
    <>
      <div>BuyButton</div>
      <h2>{user.userName}</h2>
      <h2>{user.role}</h2>
      <button onClick={()=>{console.log(user.role);
      }}>Buy</button>
    </>
  );
};

export default BuyButton;
