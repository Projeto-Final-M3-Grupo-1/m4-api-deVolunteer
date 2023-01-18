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
  applyOnTaskController,
  concludTaskControler,
} from "../controllers";
import {
  ensureAuthMiddleware,
  ensureIsActive,
  ensureIsOwnerOrAdm,
  ensureUpdateData,
  ensureUserExists,
  ensureIsAdminMiddleware,
  ensureIsIdValidMiddleware,
} from "../middlewares";

const userRouter = Router();

userRouter.post("", createUserController);

userRouter.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  listUserController
);

userRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
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

userRouter.post(
  "/tasks/:id",
  ensureIsIdValidMiddleware,
  ensureAuthMiddleware,
  applyOnTaskController
);

userRouter.post(
  "/tasks/:id/concluded",
  ensureIsIdValidMiddleware,
  ensureAuthMiddleware,
  concludTaskControler
);

export default userRouter;
