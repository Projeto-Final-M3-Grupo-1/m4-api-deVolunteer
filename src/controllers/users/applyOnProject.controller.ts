import { Request, Response } from "express";
import { applyOnProjectService } from "../../services";

const applyOnProjectController = async (req: Request, res: Response) => {
  const projectId = req.params.id;
  const userData = req.user;
  const response = await applyOnProjectService(projectId, userData);
  return res.status(201).json(response);
};

export default applyOnProjectController;
