import { Router } from "express";
import createUser from "../controllers/users/createUser.controller";
import deleteUserController from "../controllers/users/deleteUser.controller";
import listUser from "../controllers/users/listUsers.controller";
import updateUserController from "../controllers/users/updateUser.controller";

const userRouter = Router();

userRouter.post("", createUser);
userRouter.get("", listUser);
userRouter.delete("/:id", deleteUserController);
userRouter.patch("/:id", updateUserController);

export default userRouter;
