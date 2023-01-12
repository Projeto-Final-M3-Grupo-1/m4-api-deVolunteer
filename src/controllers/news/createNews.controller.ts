import { Request, Response } from "express";
import { createNewsService } from "../../services";

const createNewsController = async (req: Request, res: Response) => {
	const data = req.body;
	const userId = req.user.id;
	const response = await createNewsService(data, userId);

	return res.status(201).json(response);
};

export default createNewsController;
