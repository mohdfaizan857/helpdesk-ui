import React from "react";
import "../styles/cardList.css"; // Add a separate CSS file for CardList styling

const CardList = ({ cards }) => {
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
