import { useContext, useState } from "react";
import Home from "./UseContext/Home";
import UserContext from "./UseContext/UserContext";

function App() {
  const user = {
    userName: "Guhan",
    role: "Admin",
  };
  return (
    <>
      <UserContext.Provider value={user}>
        <Home />
      </UserContext.Provider>
    </>
  );
}

export default App;
