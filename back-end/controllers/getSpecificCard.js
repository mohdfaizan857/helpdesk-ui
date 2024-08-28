import { Card } from "../models/Card.models.js";

const getCardWithID = async (req, res) => {
  try {
    const title = req.params.title;
    const card = await Card.findOne({ title });
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export default getCardWithID;
