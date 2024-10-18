import express from "express";
import games from "../data/data.js";

const router = express.Router();

router.get("/games", (req, res) => {
  res.status(200).json(games);
});

router.get("/game/:id", (req, res) => {
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
    id: String(games.length + 1),
    gameName,
    gameType,
    releaseYear,
  };
  games.push(newGame);
  res.status(201).json(newGame);
});

router.put("/game/:id", express.json(), (req, res) => {
  const game = games.find((g) => g.id === req.params.id);
  if (game) {
    game.gameName = req.body.gameName || game.gameName;
    game.gameType = req.body.gameType || game.gameType;
    game.releaseYear = req.body.releaseYear || game.releaseYear;
    res.status(200).json(game);
  } else {
    res.status(404).json({ message: "Game not found" });
  }
});

router.delete("/game/:id", (req, res) => {
  const game = games.find((g) => g.id === req.params.id);

  if (game) {
    const updatedGames = games.filter((g) => g.id !== req.params.id);
    games.length = 0;
    games.push(...updatedGames);

    res.status(200).json({ message: "Game deleted successfully" });
  } else {
    res.status(404).json({ message: "Game not found" });
  }
});

export default router;
