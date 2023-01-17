import { Request, Response } from "express";
import { listTechnologiesService } from "../../services";

const listTechnologiesController = async (req: Request, res: Response) => {
  const response = await listTechnologiesService();
  return res.status(200).json(response);
};

export default listTechnologiesController;
