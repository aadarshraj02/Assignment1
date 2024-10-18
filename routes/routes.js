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

router.post("/game", express.json(), (req, res) => {
  const { gameName, gameType, releaseYear } = req.body;
  const newGame = {
    id: games.length + 1,
    gameName,
    gameType,
    releaseYear,
  };
  games.push(newGame);
  res.status(201).json(newGame);
});

export default router;
