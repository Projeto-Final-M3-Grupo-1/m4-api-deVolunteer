import { Request, Response } from "express";
import { IOngUpdate } from "../../interfaces/ongs";
import { updateOngService } from "../../services/ongs/updateOng.service";

export const updateOngController = async (req: Request, res: Response) => {
  const ongData: IOngUpdate = req.body;
  const ongId = req.params.id;
  const updatedOng = await updateOngService(ongData, ongId);
  return res.json(updatedOng);
};
