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
  isAdminMiddleware,
  isIdValidMiddleware,
} from "../middlewares";
const newsRouter = Router();

newsRouter.post(
  "",
  ensureAuthMiddleware,
  isAdminMiddleware,
  createNewsController
);

newsRouter.get("", ensureAuthMiddleware, listNewsController);

newsRouter.delete(
  "/:id",
  ensureAuthMiddleware,
  isAdminMiddleware,
  isIdValidMiddleware,
  deleteNewsController
);

newsRouter.patch(
  "/:id",
  ensureAuthMiddleware,
  isAdminMiddleware,
  isIdValidMiddleware,
  updateNewsController
);

newsRouter.get("/:id", isIdValidMiddleware, listNewsByIdController);

export default newsRouter;
