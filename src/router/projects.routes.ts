import { Router } from "express";
import {
  createProjectController,
  deleteProjectController,
  listProjectController,
  updateProjectController,
} from "../controllers";

import { ensureAuthMiddleware, isAdminMiddleware } from "../middlewares";

const projectRouter = Router();

projectRouter.post("", ensureAuthMiddleware, createProjectController);

projectRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  isAdminMiddleware,
  updateProjectController
);

projectRouter.get("", ensureAuthMiddleware, listProjectController);

projectRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  isAdminMiddleware,
  deleteProjectController
);

export default projectRouter;
