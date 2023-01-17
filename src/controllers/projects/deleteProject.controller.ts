import { Request, Response } from "express";
import deleteProjectService from "../../services/projects/deleteProject.service";

const deleteProjectController = async (req: Request, res: Response) => {
  const projectsId = req.params.id;
  await deleteProjectService(projectsId);

  res.status(204).send();
};

export default deleteProjectController;
