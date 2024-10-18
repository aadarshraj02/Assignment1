import express from "express";
import games from "../data/data.js";

const router = express.Router();

router.get("/games", (req, res) => {
  res.status(200).json(games);
});

export default router;
