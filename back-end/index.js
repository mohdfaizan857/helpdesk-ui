import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import bodyParser from "body-parser";
import createACard from "./controllers/createCard.js";
import getAllCards from "./controllers/getCards.js";
import getCardWithID from "./controllers/getSpecificCard.js";
import cors from "cors";

dotenv.config({
  path: "./.env",
});
const app = express();
const PORT = process.env.PORT;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());
app.use(cors());
connectDB();

//Routes
app.post("/cards", createACard);
app.get("/cards", getAllCards);
app.get("/cards/:title", getCardWithID);

app.listen(PORT, () => {
  console.log(`Server is running at PORT : ${PORT}`);
});
