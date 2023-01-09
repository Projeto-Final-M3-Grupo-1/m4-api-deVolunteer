import "reflect-metadata";
import express from "express";
import "express-async-errors";
import userRouter from "./router/users.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);

export default app;
