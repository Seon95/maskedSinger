import express from "express";
import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import singerRoute from "./routes/singerRoute.js";
const app = express();
const endpoint = "/singer";

//variables
const { MONGO_URL, PORT } = process.env;

//middelware//
app.use(express.json());
app.use(endpoint, singerRoute);

// listen to server and connect db
const startServer = async () => {
  try {
    mongoose.set(`strictQuery`, true);
    mongoose.connect(MONGO_URL);
    app.listen(PORT, () => {
      console.log(`Server is running @ ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};
startServer();
