import { Router } from "express";
import {
	createNewsController,
	listNewsController,
	deleteNewsController,
	updateNewsController,
} from "../controllers";
const newsRouter = Router();

newsRouter.post("", createNewsController);
newsRouter.get("", listNewsController);
newsRouter.delete("/:id", deleteNewsController);
newsRouter.patch("/:id", updateNewsController);

export default newsRouter;
