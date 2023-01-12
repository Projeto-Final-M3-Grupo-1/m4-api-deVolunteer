import { Request, Response } from "express";
import { deleteNewsService } from "../../services";

const deleteNewsController = async (req: Request, res: Response) => {
	const id = req.params.id;
	const news = await deleteNewsService(id);

	return res.status(204).json(news);
};

export default deleteNewsController;
