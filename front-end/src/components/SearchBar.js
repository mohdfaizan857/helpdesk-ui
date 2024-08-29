import React from "react";
import "../styles/SearchBar.css";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
const SearchBar = ({ searchQuery, setSearchQuery, setCards, setError }) => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(searchQuery);
      const url = `http://localhost:4000/cards/${searchQuery}`;

      const response = await axios.get(url);

      if (response.data && response.data.length > 1) {
        console.log(response.data);
        setCards(response.data);
        setError("");
      } else {
        setCards([]);
        setError("No such card exists.");
      }
      navigate("/");
    } catch (error) {
      console.error("Error fetching cards:", error);
      setError("Error fetching cards.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-bar-wrapper">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn search-icon">
          &#x2192;
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
