import { Router } from "express";
import {
  createOngController,
  deleteOngController,
  listOngController,
  updateOngController,
} from "../controllers";
import {
  ensureAuthMiddleware,
  ensureIsActive,
  ensureIsIdValidMiddleware,
  ensureOngExistsMiddleware,
  validateSchemaMiddleware,
} from "../middlewares";
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
  ensureIsIdValidMiddleware,
  ensureAuthMiddleware,
  ensureOngExistsMiddleware,
  validateSchemaMiddleware(ongUpdateSerializer),
  updateOngController
);

ongRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsActive,
  ensureIsIdValidMiddleware,
  ensureOngExistsMiddleware,
  deleteOngController
);

export default ongRouter;
