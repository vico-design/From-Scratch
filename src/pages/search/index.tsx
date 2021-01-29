import React, { useState, useEffect } from "react";
import "./styles.css";
import { getCharacters } from "../../services";
import CharacterCard from "../../components/characterCard";

const Search = () => {
  const [characters, setCharacters] = useState([]);

  const loadCharacters = async () => {
    const info = await getCharacters();
    setCharacters(info.results);
  };

  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div className="main-component">
      <h1 className="title">Rick and Morty</h1>
      <form className="input-container">
        <input className="input" />
        <button type="submit" className="button">
          Search
        </button>
      </form>
      <div className="images-container">
        {characters.map(character => (
          <CharacterCard character={character} />
        ))}
      </div>
    </div>
  );
};

export default Search;
