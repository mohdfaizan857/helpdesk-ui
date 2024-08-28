import React from "react";
import "../styles/SearchBar.css"; // Add a separate CSS file for SearchBar styling

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-bar-wrapper">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <span className="search-icon">&#x2192;</span> {/* Unicode arrow symbol */}
    </div>
  );
};

export default SearchBar;
