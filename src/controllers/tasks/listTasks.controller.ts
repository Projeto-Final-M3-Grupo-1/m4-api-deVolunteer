import { Request, Response } from "express";
import { listAllTasksService } from "../../services";

const listAllTasksController = async (req: Request, res: Response) => {
  const response = await listAllTasksService();
  return res.status(200).json(response);
};

export default listAllTasksController;
