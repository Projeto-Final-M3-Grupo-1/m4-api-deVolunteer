import { Router } from "express";
import {
  applyOnProjectController,
  createUserController,
  deleteTechnologyController,
  deleteUserController,
  getTechnologieController,
  leaveProjectController,
  listUserController,
  updateUserController,
} from "../controllers";
import {
  ensureAuthMiddleware,
  ensureIsActive,
  ensureIsOwnerOrAdm,
  ensureUpdateData,
  ensureUserExists,
  isAdminMiddleware,
} from "../middlewares";

const userRouter = Router();

userRouter.post("", createUserController);

userRouter.get("", ensureAuthMiddleware, isAdminMiddleware, listUserController);

userRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  isAdminMiddleware,
  ensureUserExists,
  ensureIsActive,
  deleteUserController
);

userRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsOwnerOrAdm,
  ensureUserExists,
  ensureUpdateData,
  updateUserController
);

userRouter.post(
  "/technologies/:id",
  ensureAuthMiddleware,
  getTechnologieController
);

userRouter.delete(
  "/technologies/:id",
  ensureAuthMiddleware,
  deleteTechnologyController
);

userRouter.post(
  "/projects/:id",
  ensureAuthMiddleware,
  applyOnProjectController
);

userRouter.delete(
  "/projects/:id",
  ensureAuthMiddleware,
  leaveProjectController
);

export default userRouter;
