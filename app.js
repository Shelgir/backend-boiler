import express from "express";
import userRouter from "./src/routes/user.routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

async function main() {
  dotenv.config("dotenv");
  await mongoose.connect(process.env.MONGO_URL);
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(userRouter);

  app.listen(process.env.PORT, () => {
    console.log("listening on port :" + process.env.PORT);
  });
}

main();
