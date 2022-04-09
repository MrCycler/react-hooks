import React, { useState } from "react";
import "./styles.css";

const UseState = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="use_state">
      <h1>UseState</h1>
      <button onClick={handleClick}>
        {darkMode ? "Dark mode" : "Light mode"}
      </button>
    </div>
  );
};

export default UseState;
