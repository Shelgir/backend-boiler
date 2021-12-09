import express from "express";
import userRouter from "./src/routes/user.routes.js";
import mongoose from "mongoose";

async function main() {
  await mongoose.connect("mongodb://localhost:27017/boiler");
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  app.use(userRouter);

  app.listen(6000, () => {
    console.log("listening on port 6000");
  });
}

main();
