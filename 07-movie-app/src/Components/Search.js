import React from "react";

function Search({ handleInputChange, handleSearch }) {
  return (
    <section className="searchbox-wrap">
      <input
        type="text"
        className="searchbox"
        placeholder="search for a movie"
        onChange={handleInputChange}
        onKeyDown={handleSearch}
      ></input>
    </section>
  );
}

export default Search;
