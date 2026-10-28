import "dotenv/config";
import mongoose from "mongoose";
import { Appareil } from "./models/appareil.model.js";
const mesAppareils = [
  { name: "Lave-vaisselle", status: "Off" },
  { name: "TV", status: "On" },
  { name: "Climatiseur", status: "Off" },
  { name: "PC", status: "On" },
  { name: "Micro-ondes", status: "Off" },
  { name: "Four", status: "On" },
  { name: "Aspirateur", status: "Off" },
  { name: "Machine à laver", status: "Off" },
  { name: "Réfrigérateur", status: "On" },
  { name: "Cafetière", status: "Off" }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    console.log("Connecté à MongoDB...");

    // Optionnel : on vide la base pour éviter les doublons
    await Appareil.deleteMany({});
    console.log("Anciens appareils supprimés.");

    // On insère la liste
    await Appareil.insertMany(mesAppareils);
    console.log("✅ Appareils ajoutés avec succès !");

    process.exit(0);
  } catch (error) {
    console.error("Erreur :", error);
    process.exit(1);
  }
}

seedDatabase();