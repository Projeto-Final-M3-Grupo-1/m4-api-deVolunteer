import { Request, Response } from "express";
import { createProjectService } from "../../services";

const createProjectController = async (req: Request, res: Response) => {
  const project = req.body;
  const userData = req.user;
  const response = await createProjectService(project, userData);
  return res.status(201).json(response);
};

export default createProjectController;
