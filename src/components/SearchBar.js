import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

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
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  );
};

export default SearchBar;
