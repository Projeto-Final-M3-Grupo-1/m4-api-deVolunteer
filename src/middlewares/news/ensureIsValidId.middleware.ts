import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";

const ensureIsIdValidMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  if (!id) {
    throw new AppError("Id is required", 404);
  }

  if (id.length < 32) {
    throw new AppError("Id is invalid", 404);
  }

  return next();
};

export default ensureIsIdValidMiddleware;
