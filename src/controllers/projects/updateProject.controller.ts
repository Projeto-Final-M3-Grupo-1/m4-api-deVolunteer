import { Request, Response } from "express";
import updateProjectService from "../../services/projects/updateProject.service";

const updateProjectController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;
  const projectUpdated = await updateProjectService(data, id);

  res.status(201).json(projectUpdated);
};

export default updateProjectController;
