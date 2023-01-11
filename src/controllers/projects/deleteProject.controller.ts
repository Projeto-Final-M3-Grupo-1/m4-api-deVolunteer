import { Request, Response } from "express";
import deleteProjectService from "../../services/projects/deleteProject.service";

const deleteProjectController = async (req: Request, res: Response) => {
  const id = req.params.id;
  const projectDeleted = await deleteProjectService(id);

  res.status(209).json(projectDeleted);
};

export default deleteProjectController;
