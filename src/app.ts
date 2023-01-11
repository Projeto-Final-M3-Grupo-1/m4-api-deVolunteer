import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { newsRouter, userRouter } from "./router";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/news", newsRouter);

export default app;
