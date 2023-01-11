import { Request, Response } from "express";
import { listNewsByIdService } from "../../services";

const listNewsByIdController = async (req: Request, res: Response) => {
	const id = req.params.id;
	const response = await listNewsByIdService(id);

	return res.status(200).json(response);
};

export default listNewsByIdController;
