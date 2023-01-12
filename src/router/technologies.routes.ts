import { Router } from "express";
import listTechnologiesController from "../controllers/technologies/technologies.controller";

const techRouter = Router();

techRouter.get("", listTechnologiesController);

export default techRouter;
