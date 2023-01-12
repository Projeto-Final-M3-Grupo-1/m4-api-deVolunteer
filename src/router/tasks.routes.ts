import { Router } from "express";
import createTaskController from "../controllers/tasks/tasks.controller";
import { ensureAuthMiddleware } from "../middlewares/users/ensureAuth.middleware";
import { isAdminMiddleware } from "../middlewares/users/isAdminMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validate/validateSchema.middlweware";
import { createTaskSerrializer } from "../serializers/task.serializer";

const tasksRoutes = Router();

tasksRoutes.post(
    "",
    ensureAuthMiddleware,
    isAdminMiddleware,
    validateSchemaMiddleware(createTaskSerrializer),
    createTaskController
);

export default tasksRoutes;
