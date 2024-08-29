import React, { useState } from "react";
import "../styles/CreateForm.css";
import { useNavigate } from "react-router-dom";

function CardForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const card = { title, description };

    try {
      const response = await fetch("http://localhost:4000/cards", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(card),
      });

      if (response.ok) {
        setMessage("Card created successfully!");
        setTitle("");
        setDescription("");
        navigate("/");
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message}`);
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="main-form">
        <h2>Create a New Help Center Card</h2>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter the title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Enter the description"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
        <div className="error-message">{message && <p>{message}</p>}</div>
      </form>
    </div>
  );
}

export default CardForm;
