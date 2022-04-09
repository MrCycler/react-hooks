import React, { useState, useEffect } from "react";
import "./styles.css";

const UseEffect = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="use_effect">
      <h1>UseEffect</h1>
      {characters
        .filter((character) => character.name.includes("Smith"))
        .map((character) => (
          <p>{character.name}</p>
        ))}
    </div>
  );
};

export default UseEffect;
