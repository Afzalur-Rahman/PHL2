import express from "express";
import cors from "cors";

import bookRoutes from "./routes/book.routes";

const app = express();

//cors
const allowedOrigins = [
  "https://clienta4.vercel.app",
  "https://clienta4-34p86vzz5-afzals-projects-44868621.vercel.app",
  "https://clienta4-eg0c8u6o8-afzals-projects-44868621.vercel.app",
  "https://clienta4-llaiuwb1b-afzals-projects-44868621.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:3000",
];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());


app.get("/", (req, res) => {
  res.json({ message: "api running" });
});

app.use("/api", bookRoutes);

export default app;
