import { Router } from "express";
import User from "../models/user.model.js";
import userValidate from "../validations/user.validate.js";

const userRouter = Router();

userRouter.get("/users", (req, res) => {
  res.send("hello gyan");
});

userRouter.post("/users", async (req, res) => {
  try {
    await userValidate.validateAsync(req.body);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
  const user = await new User(req.body);
  await user.save();
  res.json({ message: "user created" });
});

userRouter.delete("/users", (req, res) => {
  User.deleteMany({}).then(() => console.log("deleted all"));
  res.send("deleted all");
});

export default userRouter;
