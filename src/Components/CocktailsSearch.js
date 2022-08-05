import React from "react";
import { useGlobalContext } from "../Context";

const CocktailsSearch = () => {
  const { search, setSearch } = useGlobalContext();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(search);
  };
  return (
    <main className=" my-10 h-[5rem] w-[80%] max-w-[500px] border-2 border-green-500 bg-white shadow-xl rounded-lg flex flex-col items-center justify-center">
      <form className="space-x-2 flex items-center justify-center">
        <input
          type="text"
          className="outline-none w-[50%] border-b-2 border-green-500 p-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-green-500 w-[5rem] py-1 inline-block text-center"
          onClick={handleSearch}
        >
          Search
        </button>
      </form>
    </main>
  );
};

export default CocktailsSearch;
