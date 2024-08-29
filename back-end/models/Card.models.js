import mongoose from "mongoose";

const Schema = mongoose.Schema;

// MongoDB provides _id attribute by itself which is unique for every entry, so we do not need to
//   explicitly have a id attribute

const cardSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

export const Card = mongoose.model("Card", cardSchema);
