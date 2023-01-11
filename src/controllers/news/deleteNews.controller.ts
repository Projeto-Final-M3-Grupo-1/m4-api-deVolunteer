import { Request, Response } from "express";
import { deleteNewsService } from "../../services";

const deleteNewsController = async (req: Request, res: Response) => {
	const news = await deleteNewsService(req.params.id);

	return res.status(204).json(news);
};

export default deleteNewsController;
