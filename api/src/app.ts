import express from "express";
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";
import { appareilRouter } from "./routes/appareil.route.js";
import { roomRouter } from "./routes/room.route.js";

export const app = express();

// 1. Les middlewares de sécurité et de log
app.use(helmet());
app.use(morgan("dev"));
app.use(cors({ origin: "http://localhost:4200" }));
app.use(express.json());

// 2. Les routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/appareils", appareilRouter);
app.use("/api/rooms", roomRouter);