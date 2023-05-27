import React, { useState, useEffect } from "react";

import Card from "./components/Card";
import "./styles.css";

const UseEffect = () => {
  //use State
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://rickandmortyapi.com/api/character/"
      );
      const data = await response.json();
      setCharacters(data.results);
    };
    getData();
  }, []);

  useEffect(() => {
    console.log(characters);
  }, [characters]);

  return (
    <div className="use_effect">
      <h1>UseEffect</h1>
      {characters
        .filter((character) => character.name.includes("Smith"))
        .map((character) => (
          <Card character={character}/>
        ))}
    </div>
  );
};

export default UseEffect;
