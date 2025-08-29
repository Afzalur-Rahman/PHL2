import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/library";

const PORT = process.env.PORT || 5000;

// Connect to DB once (works both locally and on Vercel)
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb database");
    if (!process.env.VERCEL) {
      app.listen(PORT, () => {
        console.log(`the server is running on port : ${PORT}`);
      });
    }
  })
  .catch((err) => {
    console.error("Connection failed to DB", err);
  });

// On Vercel, export the Express app as the handler
export default app;
