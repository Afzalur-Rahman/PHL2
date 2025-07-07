import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/library";

const PORT = process.env.PORT || 3000;

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log("connected to mongodb database");
    app.listen(PORT, () => {
      console.log(`the server is running on port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Connection failed to DB", err);
  });
