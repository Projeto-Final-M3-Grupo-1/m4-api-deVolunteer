import { Request, Response } from "express";
import listProjectService from "../../services/projects/listProject.service";

const listProjectController = async (req: Request, res: Response) => {
  const allProjects = await listProjectService();

  res.status(200).json(allProjects);
};

export default listProjectController;
