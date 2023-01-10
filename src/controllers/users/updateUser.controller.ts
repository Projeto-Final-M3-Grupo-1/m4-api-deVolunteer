import { iUser, iUserUpdate } from "../../interfaces/users";
import { Request, Response } from "express";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (req: Request, res: Response) => {
  const userData = req.body;
  const userId = req.params.id;
  const updatedUser = await updateUserService(userData, userId);

  return res.status(200).json(updatedUser);
};
export default updateUserController;
