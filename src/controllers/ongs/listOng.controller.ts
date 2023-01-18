import { Request, Response } from "express";
import { listOngService } from "../../services";

const listOngController = async (req: Request, res: Response) => {
  const response = await listOngService();
  return res.json(response);
};

export default listOngController;
