import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import CardForm from "./pages/CreateRequest";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-card" element={<CardForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
