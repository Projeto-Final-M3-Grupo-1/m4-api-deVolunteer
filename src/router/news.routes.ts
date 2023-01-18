import { Router } from "express";
import {
  createNewsController,
  listNewsController,
  deleteNewsController,
  updateNewsController,
  listNewsByIdController,
} from "../controllers";
import {
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  ensureIsIdValidMiddleware,
} from "../middlewares";
const newsRouter = Router();

newsRouter.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  createNewsController
);

newsRouter.get("", ensureAuthMiddleware, listNewsController);

newsRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  ensureIsIdValidMiddleware,
  deleteNewsController
);

newsRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdminMiddleware,
  ensureIsIdValidMiddleware,
  updateNewsController
);

newsRouter.get("/:id", ensureIsIdValidMiddleware, listNewsByIdController);

export default newsRouter;
