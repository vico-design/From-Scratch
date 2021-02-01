import React, { useState, useEffect } from "react";
import "./styles.css";
import { getCharacters } from "../../services";
import Card from "../../components/card";
import Select from "../../components/select";
import Pagination from "../../components/pagination";

interface IPagination {
  count: number;
  pages: number;
}

const Search = () => {
  const [characters, setCharacters] = useState([]);
  const [pagination, setPagination] = useState<IPagination>();
  const [page, setPage] = useState(1);
  const [input, setInput] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const loadCharacters = async () => {
    const information = await getCharacters({
      name: input,
      gender,
      status,
      page: page,
    });
    setCharacters(information.results);
    const pagi = information.info;
    setPagination({ count: pagi.count, pages: pagi.pages });
  };

  useEffect(() => {
    loadCharacters();
  }, [gender, status, page]);

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    loadCharacters();
  };

  const changePage = (action: "previous" | "next") => {
    const newPage = action === "next" ? page + 1 : page - 1;
    setPage(newPage);
  };

  return (
    <div className="search-container">
      <form className="input-container">
        <input
          className="input"
          onChange={e => setInput(e.currentTarget.value)}
          type="text"
          value={input}
          placeholder="Type a character..."
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
      {pagination && (
        <Pagination
          totalResults={pagination?.count}
          totalPages={pagination?.pages}
          changePage={changePage}
          actualPage={page}
        />
      )}
    </div>
  );
};

export default Search;
