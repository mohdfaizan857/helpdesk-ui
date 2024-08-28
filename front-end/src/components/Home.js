import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import CardList from "./CardList";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/App.css";

const Home = () => {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch the cards from the backend API
    axios
      .get("http://localhost:4000/cards")
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
      <Navbar />
      <header className="header">
        <h1>How can we help?</h1>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </header>
      <CardList cards={filteredCards} />
      <Footer />
    </div>
  );
};

export default Home;
