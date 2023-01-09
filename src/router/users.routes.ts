import { Router } from "express";
import listUser from "../controllers/users/listUsers.controller";

const userRouter = Router();

userRouter.get("", listUser);

export default userRouter;
