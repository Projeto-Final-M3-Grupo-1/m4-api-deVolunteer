import { Router } from "express";
import {
  insertTechnologiesController,
  listTechnologiesController,
} from "../controllers";
import { ensureAuthMiddleware } from "../middlewares";

const techRouter = Router();

techRouter.get("", ensureAuthMiddleware, listTechnologiesController);
techRouter.post("/:secret", insertTechnologiesController);

export default techRouter;
