import { Request, Response, NextFunction } from "express";
import AppError from "../../errors/appError";

const ensureUpdateData = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.isAdm !== undefined) {
    throw new AppError("You dont update this!", 401);
  }

  if (req.body.id !== undefined) {
    throw new AppError("You dont update this!", 401);
  }

  if (req.body.isActive !== undefined) {
    throw new AppError("You dont update this!", 401);
  }

  return next();
};

export default ensureUpdateData;
