import { Router } from "express";
import { createOngController } from "../controllers/ongs/createOng.controller";
import { validateSchemaMiddleware } from "../middlewares/validate/validateSchema.middlweware";
import { ongSchema } from "../serializers/ong.serializers";

export const ongRouter = Router();

ongRouter.post("", validateSchemaMiddleware(ongSchema), createOngController);
