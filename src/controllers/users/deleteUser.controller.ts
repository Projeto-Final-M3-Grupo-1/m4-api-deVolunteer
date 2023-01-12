import { Request, Response } from "express";
import { deleteUserService } from "../../services";

const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;

  const user = await deleteUserService(userId);

  return res.status(204).json(user);
};

export default deleteUserController;
