import { Request, Response } from "express";
import { deleteUserService } from "../../services";

const deleteUserController = async (req: Request, res: Response) => {
	const user = await deleteUserService(req.params.id);

	return res.status(204).json(user);
};

export default deleteUserController;
