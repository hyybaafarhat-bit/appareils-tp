import { Router } from "express";
import { Appareil } from "../models/appareil.model.js";

export const appareilRouter = Router();

// READ all avec filtre optionnel
appareilRouter.get("/", async (req, res) => {
  const filter: any = {};
  if (req.query.status) filter.status = req.query.status;
  
  // On populate pour avoir les détails de la salle au lieu de juste l'ID
  res.status(200).json(await Appareil.find(filter).populate("room"));
});


// READ one (AJOUTÉ ICI)
appareilRouter.get("/:id", async (req, res) => {
  const appareil = await Appareil.findById(req.params.id);
  if (!appareil) return res.status(404).json({ error: "Appareil not found" });
  res.status(200).json(appareil);
});

// CREATE
appareilRouter.post("/", async (req, res) => {
  const appareil = await Appareil.create(req.body);
  res.status(201).json(appareil);
});

// UPDATE
appareilRouter.put("/:id", async (req, res) => {
  const appareil = await Appareil.findByIdAndUpdate(req.params.id, req.body, {
    returnDocument: "after",
    runValidators: true,
  });
  if (!appareil) return res.status(404).json({ error: "Appareil not found" });
  res.status(200).json(appareil);
});

// DELETE
appareilRouter.delete("/:id", async (req, res) => {
  const result = await Appareil.deleteOne({ _id: req.params.id });
  if (result.deletedCount === 0) return res.status(404).json({ error: "Appareil not found" });
  res.status(204).end();
});