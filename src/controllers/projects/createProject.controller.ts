import { Request, Response } from "express";
import createProjectService from "../../services/projects/createProject.service";

const createProjectController = async (req: Request, res: Response) => {
  const project = req.body;
  const userData = req.user;
  const newProject = await createProjectService(project, userData);
  return res.status(201).json(newProject);
};

export default createProjectController;
