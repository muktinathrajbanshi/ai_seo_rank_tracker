import express from "express";
import auth from "../middleware/auth.js";
import { addKeyword, getKeyword, getKeywords, refreshKeyword } from "../controllers/rankController.js";

const rankRouter = express.Router();

rankRouter.post("/add", auth, addKeyword);
rankRouter.post("/add", auth, addKeyword);
rankRouter.get("/:id", auth, getKeyword);
rankRouter.post("/:id/refresh", auth, refreshKeyword);
rankRouter.put("/:id/toggle", auth, refreshKeyword);