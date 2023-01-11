import { Request, Response } from "express";
import { updateNewsService } from "../../services";

const updateNewsController = async (req: Request, res: Response) => {
	const data = req.body;
	const id = req.params.id;
	const updatedNews = await updateNewsService(data, id);

	return res.status(200).json(updatedNews);
};

export default updateNewsController;
