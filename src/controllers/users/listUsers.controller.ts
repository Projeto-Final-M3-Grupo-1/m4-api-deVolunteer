import { Request, Response } from "express";
import listUsersService from "../../services/users/listUsers.service";

const listUser = async (req: Request, res: Response) => {
  const response = await listUsersService();
  return res.status(200).json(response);
};

export default listUser;
