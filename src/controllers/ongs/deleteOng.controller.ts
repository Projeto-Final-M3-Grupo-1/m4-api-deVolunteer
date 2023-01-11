import { Request, Response } from "express";
import { deleteOngService } from "../../services/ongs/deleteOng.service";

export const deleteOngController = async (req: Request, res: Response) => {
  const ongId = req.params.id;
  await deleteOngService(ongId);
  return res.status(204).send();
};
