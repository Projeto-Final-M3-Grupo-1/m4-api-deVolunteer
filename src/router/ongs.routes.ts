import { Router } from "express";
import {
  createOngController,
  deleteOngController,
  listOngController,
  updateOngController,
} from "../controllers";
import { ensureAuthMiddleware, validateSchemaMiddleware } from "../middlewares";
import {
  ongSerializer,
  ongUpdateSerializer,
} from "../serializers/ong.serializers";

const ongRouter = Router();

ongRouter.post(
  "",
  validateSchemaMiddleware(ongSerializer),
  createOngController
);

ongRouter.get("", ensureAuthMiddleware, listOngController);

ongRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  validateSchemaMiddleware(ongUpdateSerializer),
  updateOngController
);

ongRouter.delete("/:id", ensureAuthMiddleware, deleteOngController);

export default ongRouter;
