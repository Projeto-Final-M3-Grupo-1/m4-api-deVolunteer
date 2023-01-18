import { Request, Response } from "express";
import { deleteTechnologyService } from "../../services";

const deleteTechnologyController = (req: Request, res: Response) => {
  const technologyId = req.params.id;
  const response = deleteTechnologyService(technologyId);
  return res.status(204).json(response);
};

export default deleteTechnologyController;
