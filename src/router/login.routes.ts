import { Router } from "express";
import { loginController } from "../controllers";
import { validateSchemaMiddleware } from "../middlewares";
import { loginSerializer } from "../serializers/login.serializer";

export const loginRouter = Router();

loginRouter.post(
	"",
	validateSchemaMiddleware(loginSerializer),
	loginController
);
