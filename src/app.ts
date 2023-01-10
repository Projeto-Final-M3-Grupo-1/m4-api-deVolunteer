import "reflect-metadata";
import express from "express";
import "express-async-errors";
import userRouter from "./router/users.routes";
import { ongRouter } from "./router/ongs.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/ong", ongRouter);

export default app;
