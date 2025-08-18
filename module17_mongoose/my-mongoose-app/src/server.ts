import { Server } from "http";
import app from "./app/app";
import mongoose from "mongoose";

let server: Server;

const PORT = 5000;
async function main() {
  try {
    await mongoose.connect(
      "mongodb+srv://<db_username>:todoapp@cluster0.fhqlchg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );

    // mongoose.set
    console.log("Connected to MongoDB using Mongoose");
    server = app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
