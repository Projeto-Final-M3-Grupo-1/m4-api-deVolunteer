import { Request, Response } from "express";
import { listUserProfileByIdService } from "../../services";

const listUserProfileById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const response = await listUserProfileByIdService(id);

  res.status(200).json(response);
};

export default listUserProfileById;
