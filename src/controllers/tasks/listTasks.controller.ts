import { Request, Response } from "express";
import { listAllTasksService } from "../../services";

const listAllTasksController = async (req: Request, res: Response) => {
  const projectId = req.params.id;
  const response = await listAllTasksService(projectId);
  return res.status(200).json(response);
};

export default listAllTasksController;
