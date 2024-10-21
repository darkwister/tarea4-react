import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="buscador">
      <input
        type="text"
        id="search"
        placeholder="Buscar"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="search_button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export default SearchBar;
