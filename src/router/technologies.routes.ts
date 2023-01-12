import { Router } from "express";
import { insertTechnologiesController } from "../controllers";
import listTechnologiesController from "../controllers/technologies/listTechnologies.controller";

const techRouter = Router();

techRouter.get("", listTechnologiesController);
techRouter.post("/:secret", insertTechnologiesController);

export default techRouter;
