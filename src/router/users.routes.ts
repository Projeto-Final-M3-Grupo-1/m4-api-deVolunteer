import { Router } from "express";
import createUser from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUser from "../controllers/users/listUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";
import {
  ensureAuthMiddleware,
  ensureIsActive,
  ensureIsOwnerOrAdm,
  ensureUpdateData,
  ensureUserExists,
  isAdminMiddleware,
} from "../middlewares";

const userRouter = Router();

userRouter.post("", createUser);
userRouter.get("", ensureAuthMiddleware, isAdminMiddleware, listUser);
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

export default userRouter;
