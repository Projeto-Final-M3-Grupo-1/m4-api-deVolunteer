import { Request, Response } from "express";
import { applyOnTaskService } from "../../services";

const applyOnTaskController = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  const userData = req.user;
  const response = await applyOnTaskService(taskId, userData);

  return res.json(response);
};
export default applyOnTaskController;
