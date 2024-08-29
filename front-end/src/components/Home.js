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
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch the initial set of cards from the backend API
    axios
      .get("http://localhost:4000/cards")
      .then((response) => {
        console.log(response.data);
        setCards(response.data);
        setError(""); // Reset error when fetching initial data
      })
      .catch((error) => {
        console.error("Error fetching cards:", error);
        setError("Unable to fetch cards at the moment.");
      });
  }, []);

  return (
    <div className="app">
      <Navbar />
      <header className="header">
        <h1>How can we help?</h1>
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setCards={setCards}
          setError={setError}
        />
      </header>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <CardList cards={cards.slice(0, 6)} />
      )}
      <Footer />
    </div>
  );
};

export default Home;
