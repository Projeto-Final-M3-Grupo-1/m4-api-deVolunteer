import { Router } from "express";
import {
  listOngByIdController,
  listUserProfileByIdController,
} from "../controllers";
import { ensureUserExists, ensureOngExistsMiddleware } from "../middlewares";

const profileRouter = Router();

profileRouter.get("/ong/:id", ensureOngExistsMiddleware, listOngByIdController);

profileRouter.get("/user/:id", ensureUserExists, listUserProfileByIdController);

export default profileRouter;
