import { Request, Response } from "express";
import { listOngService } from "../../services/ongs/listOng.service";

export const listOngController = async (req: Request, res: Response) => {
  const ongs = await listOngService();
  return res.json(ongs);
};
