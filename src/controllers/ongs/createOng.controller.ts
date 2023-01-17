import { Request, Response } from "express";
import { IOngRequest } from "../../interfaces/ongs";
import { createOngService } from "../../services";

const createOngController = async (req: Request, res: Response) => {
  const ongData: IOngRequest = req.body;
  const response = await createOngService(ongData);
  return res.status(201).json(response);
};

export default createOngController;
