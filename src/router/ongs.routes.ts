import { Router } from "express";
import { createOngController } from "../controllers/ongs/createOng.controller";
import { deleteOngController } from "../controllers/ongs/deleteOng.controller";
import { listOngController } from "../controllers/ongs/listOng.controller";
import { updateOngController } from "../controllers/ongs/updateOng.controller";
import { ensureAuthMiddleware } from "../middlewares/users/ensureAuth.middleware";
import { validateSchemaMiddleware } from "../middlewares/validate/validateSchema.middlweware";
import {
  ongSerializer,
  ongUpdateSerializer,
} from "../serializers/ong.serializers";

export const ongRouter = Router();

ongRouter.post(
  "",
  validateSchemaMiddleware(ongSerializer),
  createOngController
);
ongRouter.get("", ensureAuthMiddleware, listOngController);
ongRouter.patch(
  "/:id",
  validateSchemaMiddleware(ongUpdateSerializer),
  updateOngController
);
ongRouter.delete("/:id", ensureAuthMiddleware, deleteOngController);
