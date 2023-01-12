import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";

const ensureIsActive = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id: req.params.id,
  });

  if (user.isActive == false) {
    throw new AppError("This user already innactive", 400);
  }
  return next();
};

export default ensureIsActive;
