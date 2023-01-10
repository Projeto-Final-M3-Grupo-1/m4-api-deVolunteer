import { Request, Response } from "express";
import { IOngRequest } from "../../interfaces/ongs";
import { createOngService } from "../../services/ongs/createOng.service";

export const createOngController = async (req: Request, res: Response) => {
  const ongData: IOngRequest = req.body;
  const newOng = await createOngService(ongData);
  return res.status(201).json(newOng);
};
