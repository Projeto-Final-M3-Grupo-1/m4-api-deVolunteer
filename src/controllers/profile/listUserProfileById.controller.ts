import { Request, Response } from "express";
import { listUserProfileByIdService } from "../../services";

const listUserProfileById = async (req: Request, res: Response) => {
	const { id } = req.params;
	const profile = await listUserProfileByIdService(id);

	res.status(200).json(profile);
};

export default listUserProfileById;
