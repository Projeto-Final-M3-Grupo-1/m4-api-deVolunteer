import { Request, Response } from "express";
import { listNewsService } from "../../services";

const listNewsController = async (req: Request, res: Response) => {
	const response = await listNewsService();

	return res.status(200).json(response);
};

export default listNewsController;
