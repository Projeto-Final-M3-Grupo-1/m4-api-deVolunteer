import "reflect-metadata";
import express from "express";
import "express-async-errors";
import { newsRouter } from "./router";
import userRouter from "./router/users.routes";
import { ongRouter } from "./router/ongs.routes";
import projectRouter from "./router/projects.routes";
import handleError from "./errors/handleError";
import techRouter from "./router/technologies.routes";
import { loginRouter } from "./router/login.routes";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/news", newsRouter);
app.use("/ong", ongRouter);
app.use("/projects", projectRouter);
app.use("/technologies", techRouter);
app.use("/login", loginRouter);

app.use(handleError);

export default app;
