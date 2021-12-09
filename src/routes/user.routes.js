import { Router } from "express";
import User from "../models/user.model.js";

const userRouter = Router();

userRouter.get("/users", (req, res) => {
  res.send("hello gyan");
});

userRouter.post("/users", async (req, res) => {
  const user = await new User(req.body);
  await user.save();
  res.json({ message: "user created" });
});

export default userRouter;
