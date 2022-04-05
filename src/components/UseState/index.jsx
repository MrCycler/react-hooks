import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <h1>Un simple header</h1>
      <button onClick={handleClick}>
        {darkMode ? "Dark mode" : "Light mode"}
      </button>
    </div>
  );
};

export default Header;
