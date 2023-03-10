import { Request, Response } from "express";
import { updateNewsService } from "../../services";

const updateNewsController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.params.id;
  const response = await updateNewsService(data, id);

  return res.status(200).json(response);
};

export default updateNewsController;
