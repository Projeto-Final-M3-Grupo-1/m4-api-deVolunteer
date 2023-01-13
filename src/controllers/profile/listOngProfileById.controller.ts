import { listOngByIdService } from "../../services";

const listOngByIdController = async (req, res) => {
	const { id } = req.params;

	const ong = await listOngByIdService(id);

	return res.status(200).json(ong);
};

export default listOngByIdController;
