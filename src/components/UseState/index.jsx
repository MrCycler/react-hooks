import React, { useState } from "react";
import "./styles.css";

const UseState = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [word, setWork] = useState("a");
  // boolean, numeric, string, array, object

  const handleClick = () => {
    setDarkMode(!darkMode);
    setWork(word + "a");
  };

  return (
    <div className="use_state">
      <h1>UseState</h1>
      <button onClick={handleClick}>
        {darkMode ? "Dark mode" : "Light mode"}
      </button>
      <h2>{word}</h2>
      {darkMode && <h2>Solo me muestro en Dark mode</h2>}
    </div>
  );
};

export default UseState;
