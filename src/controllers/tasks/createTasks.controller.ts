import { Request, Response } from "express";
import { ITaskResponse } from "../../interfaces/tasks";
import { createTaskService } from "../../services";

const createTaskController = async (req: Request, res: Response) => {
  const projectId: string = req.params.id;
  const taskData: ITaskResponse = req.body;
  const response = await createTaskService(projectId, taskData);
  return res.status(201).send(response);
};

export default createTaskController;
