import { Router } from "express";
import { loginController } from "../controllers/login/login.controller";
import { validateSchemaMiddleware } from "../middlewares/validate/validateSchema.middlweware";
import { loginSerializer } from "../serializers/login.serializer";

export const loginRouter = Router();

loginRouter.post(
  "",
  validateSchemaMiddleware(loginSerializer),
  loginController
);
