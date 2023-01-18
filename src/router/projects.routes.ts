import { Router } from "express";
import {
  createProjectController,
  deleteProjectController,
  listProjectController,
  updateProjectController,
} from "../controllers";

import { ensureAuthMiddleware, ensureIsAdminMiddleware } from "../middlewares";

const projectRouter = Router();

projectRouter.post("", ensureAuthMiddleware, createProjectController);

projectRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  updateProjectController
);

projectRouter.get("", ensureAuthMiddleware, listProjectController);

projectRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  deleteProjectController
);

export default projectRouter;
