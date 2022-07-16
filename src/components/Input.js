import React, { useState } from "react";

const Input = () => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    if (e.target.value.length > 10) {
      setError("Error");
    } else {
      setValue(e.target.value.replace(/\D/g, ""));
    }
  };

  return (
    <div className="Input">
      Enter : <input type="text" value={value} onChange={inputHandler} />
    </div>
  );
};

export default Input;
