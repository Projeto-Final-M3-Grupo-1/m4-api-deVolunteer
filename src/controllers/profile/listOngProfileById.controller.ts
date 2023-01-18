import { Request, Response } from "express";
import { listOngByIdService } from "../../services";

const listOngByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const response = await listOngByIdService(id);

  return res.status(200).json(response);
};

export default listOngByIdController;
