import { Request, Response } from "express";
import { createNewsService } from "../../services";

const createNewsController = async (req: Request, res: Response) => {
	const response = await createNewsService(req.body);

	return res.status(201).json(response);
};

export default createNewsController;
