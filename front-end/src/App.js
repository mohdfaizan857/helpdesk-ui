import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import CardList from "./components/CardList";
import "./App.css";

const App = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch the cards from the backend API
    axios
      .get("http://localhost:3000/cards")
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
      });
  }, []);

  // Filter cards based on the search query
  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>How can we help?</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </header>
      <CardList cards={filteredCards} />
    </div>
  );
};

export default App;
