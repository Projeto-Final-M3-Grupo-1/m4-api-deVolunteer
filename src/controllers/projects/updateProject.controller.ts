import { Request, Response } from "express";
import { updateProjectService } from "../../services";

const updateProjectController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;
  const response = await updateProjectService(data, id);

  res.status(201).json(response);
};

export default updateProjectController;
