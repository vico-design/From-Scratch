import React, { useState, useEffect } from "react";
import "./styles.css";
import { getCharacters } from "../../services";
import Card from "../../components/card";
import Select from "../../components/select";

const Search = () => {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const loadCharacters = async () => {
    const info = await getCharacters({ name: input, gender, status });
    setCharacters(info.results);
  };

  useEffect(() => {
    loadCharacters();
  }, [gender, status]);

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    loadCharacters();
  };

  return (
    <div className="search-container">
      <form className="input-container">
        <input
          className="input"
          onChange={e => setInput(e.currentTarget.value)}
          type="text"
          value={input}
        />
        <Select
          title="Gender"
          options={["female", "male", "genderless", "unknown"]}
          setter={setGender}
        />
        <Select
          title="Status"
          options={["alive", "dead", "unknown"]}
          setter={setStatus}
        />
        <button
          type="submit"
          className="button"
          onClick={e => submitHandler(e)}>
          Search
        </button>
      </form>
      <div className="cards-container">
        {characters.map(character => (
          <Card character={character} />
        ))}
      </div>
    </div>
  );
};

export default Search;
