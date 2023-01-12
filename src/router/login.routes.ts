import { Router } from "express";
import { loginController } from "../controllers/login/login.controller";
import { ensureAuthMiddleware } from "../middlewares/users/ensureAuth.middleware";
import { isAdminMiddleware } from "../middlewares/users/isAdminMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validate/validateSchema.middlweware";
import { loginSerializer } from "../serializers/login.serializer";

export const loginRouter = Router();

loginRouter.post(
  "",
  validateSchemaMiddleware(loginSerializer),
  loginController
);
