import express from "express";
import cors from "cors";

import bookRoutes from "./routes/book.routes";

const app = express();

// Enable CORS for all routes
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend origin
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", bookRoutes);

export default app;
