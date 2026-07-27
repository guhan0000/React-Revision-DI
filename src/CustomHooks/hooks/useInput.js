import { useState } from "react";

const useInput = () => {
  const [value, setValue] = useState("");
  function onChange(e) {
    setValue(e.target.value);
  }
  function reset() {
    setValue("");
  }
  return { value, onChange, reset };
};
export default useInput;
