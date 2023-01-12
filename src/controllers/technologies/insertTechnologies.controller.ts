import { Request, Response } from "express";
import { insertTechnologiesService } from "../../services";

const insertTechnologiesController = async (req: Request, res: Response) => {
  const response = await insertTechnologiesService(req.params.secret);
  return res.status(200).json(response);
};

export default insertTechnologiesController;
