import { Router } from "express";
import createProjectController from "../controllers/projects/createProject.controller";
import listProjectController from "../controllers/projects/listProject.controller";
import updateProjectController from "../controllers/projects/updateProject.controller";
import deleteProjectController from "../controllers/projects/deleteProject.controller";

const projectRouter = Router();

projectRouter.post("", createProjectController);
projectRouter.patch("/:id", updateProjectController);
projectRouter.get("", listProjectController);
projectRouter.delete("/:id", deleteProjectController);

export default projectRouter;
