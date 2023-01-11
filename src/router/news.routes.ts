import { Router } from "express";
import {
	createNewsController,
	listNewsController,
	deleteNewsController,
	updateNewsController,
	listNewsByIdController,
} from "../controllers";
const newsRouter = Router();

newsRouter.post("", createNewsController);
newsRouter.get("", listNewsController);
newsRouter.delete("/:id", deleteNewsController);
newsRouter.patch("/:id", updateNewsController);

newsRouter.get("/:id", listNewsByIdController);

export default newsRouter;
