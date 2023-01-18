import { Request, Response } from "express";
import { concludTaskService } from "../../services";

const concludTaskControler = async (req: Request, res: Response) => {
  const taskId = req.params.id;
  const userData = req.user;
  const response = await concludTaskService(taskId, userData);

  return res.json(response);
};

export default concludTaskControler;
