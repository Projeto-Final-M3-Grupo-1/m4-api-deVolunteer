import { Router } from "express";
import createProjectController from "../controllers/projects/createProject.controller";
import listProjectController from "../controllers/projects/listProject.controller";
import updateProjectController from "../controllers/projects/updateProject.controller";
import deleteProjectController from "../controllers/projects/deleteProject.controller";
import { ensureAuthMiddleware, isAdminMiddleware } from "../middlewares";

const projectRouter = Router();

projectRouter.post("", ensureAuthMiddleware, createProjectController);
projectRouter.patch("/:id", ensureAuthMiddleware, updateProjectController);
projectRouter.get("", ensureAuthMiddleware, listProjectController);
projectRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  isAdminMiddleware,
  deleteProjectController
);

export default projectRouter;
