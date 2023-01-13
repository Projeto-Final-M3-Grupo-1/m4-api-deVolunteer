import { Router } from "express";

import { loginController } from "../controllers";
import { validateSchemaMiddleware } from "../middlewares";
import { loginSerializer } from "../serializers/login.serializer";

const loginRouter = Router();

loginRouter.post(
	"",
	validateSchemaMiddleware(loginSerializer),
	loginController
);

export default loginRouter;
