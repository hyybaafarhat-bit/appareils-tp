import { Router } from "express";
import { Room } from "../models/room.model.js";

export const roomRouter = Router();

roomRouter.get("/", async (_req, res) => {
  res.status(200).json(await Room.find());
});

roomRouter.post("/", async (req, res) => {
  res.status(201).json(await Room.create(req.body));
});