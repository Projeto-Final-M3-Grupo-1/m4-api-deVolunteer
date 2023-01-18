import { Router } from "express";
import {
  createTaskController,
  deleteTaskController,
  listAllTasksController,
  updateTaskcontroller,
} from "../controllers";
import {
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  validateSchemaMiddleware,
} from "../middlewares";
import { createTaskSerrializer } from "../serializers/task.serializer";

const tasksRoutes = Router();

tasksRoutes.post(
  "/projects/:id",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  validateSchemaMiddleware(createTaskSerrializer),
  createTaskController
);

tasksRoutes.get("/projects/:id", ensureAuthMiddleware, listAllTasksController);

tasksRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  updateTaskcontroller
);

tasksRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  deleteTaskController
);

export default tasksRoutes;
