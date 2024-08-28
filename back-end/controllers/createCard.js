import { Card } from "../models/Card.models.js";

const createACard = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        message: "Please provide both title and description",
      });
    }

    const existingTitle = await Card.findOne({ title });

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
