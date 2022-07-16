import React, { useState } from "react";

// Styles
import "./Input.css";

const Input = ({ limit, pHolder, label }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const inputHandler = (e) => {
    if (e.target.value.length > limit) {
      setError("Error");
    } else {
      setValue(e.target.value.replace(/\D/g, ""));
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
