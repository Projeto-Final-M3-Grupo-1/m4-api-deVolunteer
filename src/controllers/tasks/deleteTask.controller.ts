import { Request, Response } from "express";
import { deleteTaskService } from "../../services";

const deleteTaskController = async (req: Request, res: Response) => {
  const TaskId: string = req.params.id;
  await deleteTaskService(TaskId);
  return res.status(204).send();
};

export default deleteTaskController;
