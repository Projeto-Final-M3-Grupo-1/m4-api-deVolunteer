import "reflect-metadata";
import express from "express";
import "express-async-errors";
import {
	newsRouter,
	loginRouter,
	userRouter,
	projectRouter,
	techRouter,
	tasksRoutes,
	ongRouter,
	profileRouter,
} from "./router";
import handleError from "./errors/handleError";

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/news", newsRouter);
app.use("/ong", ongRouter);
app.use("/projects", projectRouter);
app.use("/technologies", techRouter);
app.use("/login", loginRouter);
app.use("/tasks", tasksRoutes);
app.use("/profile", profileRouter);

app.use(handleError);

export default app;
