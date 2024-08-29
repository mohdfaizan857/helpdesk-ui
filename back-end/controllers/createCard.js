import { Card } from "../models/Card.models.js";

const createACard = async (req, res) => {
  try {
    const { title, description } = req.body;

    //validate whether title or description is provided by the user
    if (!title || !description) {
      return res.status(400).json({
        message: "Please provide both title and description",
      });
    }

    //check if the card is already present of the same title
    const existingTitle = await Card.findOne({ title });

    //if present, we do not create two cards of same name and return the error.
    if (existingTitle) {
      return res.status(401).json({
        message: "Help Card of this title already exists.",
      });
    }

    const card = await Card.create({ title, description });
    res.status(201).json({
      message: "Card created successfully",
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

export default createACard;
