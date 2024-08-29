import React from "react";
import "../styles/cardList.css";

const CardList = ({ cards }) => {
  if (!cards || cards.length === 0) {
    return <p>No cards to display.</p>; // Handle the case when there are no cards
  }
  return (
    <div className="card-list">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <h2>{card.title}</h2>
          <p>{card.description}</p>
        </div>
      ))}
    </div>
  );
};

export default CardList;
