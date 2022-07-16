import React, { useState } from "react";

// Styles
import "./Input.css";

const Input = ({ limit, pHolder, label, getInfo }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const inputHandler = (e) => {
    if (e.target.value.length > limit) {
      setError(true);
    } else {
      setValue(e.target.value.replace(/\D/g, ""));
      getInfo(e.target.value.length);
    }
  };

  return (
    <div className="Input">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={inputHandler}
        placeholder={pHolder}
      />
    </div>
  );
};

export default Input;
