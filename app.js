import express from "express";
import userRouter from "./src/routes/user.routes.js";

const app = express();

app.use(userRouter);

app.listen(6000, () => {
  console.log("listening on port 6000");
});
