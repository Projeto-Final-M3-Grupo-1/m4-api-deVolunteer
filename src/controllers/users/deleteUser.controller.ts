import { Request, Response } from "express";
import deleteUserService from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const user = await deleteUserService(req.params.id);

  return res.status(204).json(user);
};

export default deleteUserController;
