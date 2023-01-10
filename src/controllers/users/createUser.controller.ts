import { Request, Response } from "express";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const response = await createUserService(req.body);
  return res.status(201).json(response);
};

export default createUserController;
