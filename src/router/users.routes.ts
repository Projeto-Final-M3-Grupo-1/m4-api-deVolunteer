import { Router } from "express";
import {
	createUserController,
	deleteUserController,
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

export default userRouter;
