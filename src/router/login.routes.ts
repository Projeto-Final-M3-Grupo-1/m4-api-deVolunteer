import { Router } from "express";

import { validateSchemaMiddleware } from "../middlewares/validate/validateSchema.middlweware";
import { loginController } from "../controllers";
import { loginSerializer } from "../serializers/login.serializer";

export const loginRouter = Router();

loginRouter.post(
	"",
	validateSchemaMiddleware(loginSerializer),
	loginController
);
