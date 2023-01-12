import { Router } from "express";
import { insertTechnologiesController } from "../controllers";
import listTechnologiesController from "../controllers/technologies/listTechnologies.controller";
import { ensureAuthMiddleware } from "../middlewares";

const techRouter = Router();

techRouter.get("", ensureAuthMiddleware, listTechnologiesController);
techRouter.post("/:secret", insertTechnologiesController);

export default techRouter;
