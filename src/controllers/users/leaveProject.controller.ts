import { Request, Response } from "express";
import { leaveProjectService } from "../../services";

const leaveProjectController = async (req: Request, res: Response) => {
  const projectId = req.params.id;
  const userData = req.user;

  const response = await leaveProjectService(projectId, userData);

  return res.status(204).json(response);
};

export default leaveProjectController;
