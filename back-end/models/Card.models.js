import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cardSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export const Card = mongoose.model("Card", cardSchema);
