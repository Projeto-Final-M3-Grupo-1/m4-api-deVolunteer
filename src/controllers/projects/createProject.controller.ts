import { Request, Response } from "express";
import createProjectService from "../../services/projects/createProject.service";

const createProjectController = async (req: Request, res: Response) => {
  const project = req.body;
  console.log(req.body);
  const newProject = await createProjectService(project);
  return res.status(201).json(newProject);
};

export default createProjectController;
