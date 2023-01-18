import { Router } from "express";
import { createTaskController, deleteTaskController, listAllTasksController, updateTaskcontroller } from "../controllers";
import { ensureAuthMiddleware, isAdminMiddleware, validateSchemaMiddleware } from "../middlewares";
import { createTaskSerrializer } from "../serializers/task.serializer";

const tasksRoutes = Router();

tasksRoutes.post(
    "/projects/:id",
    ensureAuthMiddleware,
    isAdminMiddleware,
    validateSchemaMiddleware(createTaskSerrializer),
    createTaskController
);

tasksRoutes.get(
    "",
    ensureAuthMiddleware,
    listAllTasksController
);

tasksRoutes.patch(
    "/:id",
    ensureAuthMiddleware,
    isAdminMiddleware,
    updateTaskcontroller
);

tasksRoutes.delete(
    "/:id", 
    ensureAuthMiddleware, 
    isAdminMiddleware, 
    deleteTaskController
);

export default tasksRoutes;
