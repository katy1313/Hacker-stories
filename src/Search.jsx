// import React from "react";

// function Search({ search, onSearch }) {
//   return (
//     <div>
//       <label htmlFor="search">Search: </label>
//       <input id="search" type="text" onChange={onSearch} value={search} />
//       <p>

import React from "react";

function Search({ search, onSearch }) {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={onSearch} value={search} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}

export default Search;