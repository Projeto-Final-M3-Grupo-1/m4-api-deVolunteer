import { Router } from "express";
import { createOngController } from "../controllers/ongs/createOng.controller";
import { deleteOngController } from "../controllers/ongs/deleteOng.controller";
import { listOngController } from "../controllers/ongs/listOng.controller";
import { updateOngController } from "../controllers/ongs/updateOng.controller";
import { validateSchemaMiddleware } from "../middlewares/validate/validateSchema.middlweware";
import { ongSchema, ongUpdateSchema } from "../serializers/ong.serializers";

export const ongRouter = Router();

ongRouter.post("", validateSchemaMiddleware(ongSchema), createOngController);
ongRouter.get("", listOngController);
ongRouter.patch(
  "/:id",
  validateSchemaMiddleware(ongUpdateSchema),
  updateOngController
);
ongRouter.delete("/:id", deleteOngController);
