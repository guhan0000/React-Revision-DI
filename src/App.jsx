import { useContext, useState } from "react";
import Home from "./UseContext/theme/Home";
import ThemeContext from "./UseContext/theme/ThemeContext";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={{theme,setTheme}}>
        <Home />
      </ThemeContext.Provider>
    </>
  );
}

export default App;
