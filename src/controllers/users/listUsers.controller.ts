import { Request, Response } from "express";
import { listUsersService } from "../../services";

const listUserController = async (req: Request, res: Response) => {
	const response = await listUsersService();

	return res.status(200).json(response);
};

export default listUserController;
