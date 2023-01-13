import { Request, Response } from "express";
import { getTechnologieService } from "../../services";

const getTechnologieController = async (req: Request, res: Response) => {
  const response = await getTechnologieService(req.user, req.params.id);
  return res.json(response);
};

export default getTechnologieController;
