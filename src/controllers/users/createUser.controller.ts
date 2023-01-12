import { Request, Response } from "express";
import { createUserService } from "../../services";

const createUserController = async (req: Request, res: Response) => {
  const userData = req.body;

  const response = await createUserService(userData);

  return res.status(201).json(response);
};

export default createUserController;
