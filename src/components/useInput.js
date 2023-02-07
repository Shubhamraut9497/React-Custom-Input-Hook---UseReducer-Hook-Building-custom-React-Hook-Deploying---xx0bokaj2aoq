import { useState } from "react";

//complete the input hook
const useInput = (input) => {
  const [value, setValue] = useState(input);
  const set = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange: set };
};

export default useInput;

