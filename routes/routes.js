import express from "express";
import games from "../data/data.js";

const router = express.Router();

router.get("/games", (req, res) => {
  res.status(200).json(games);
});

router.get("/games/:id", (req, res) => {
  const game = games.find((g) => g.id === req.params.id);
  if (game) {
    res.status(200).json(game);
  } else {
    res.status(404).json({ message: "Game not found" });
  }
});

export default router;
