import { Request, Response } from "express";
import { listOngService } from "../../services";

const listOngController = async (req: Request, res: Response) => {
	const ongs = await listOngService();
	return res.json(ongs);
};

export default listOngController;
