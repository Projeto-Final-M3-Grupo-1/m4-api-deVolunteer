import AppDataSource from "../../data-source";
import Ong from "../../entities/ongs.entity";
import AppError from "../../errors/appError";
import { validate } from "uuid";

const deleteOngService = async (ongId: string): Promise<void> => {
	const ongRepository = AppDataSource.getRepository(Ong);

	if (!validate(ongId)) {
		throw new AppError("ONG not found", 404);
	}

	const findOng = await ongRepository.findOneBy({
		id: ongId,
	});

	if (!findOng) {
		throw new AppError("ONG not found", 404);
	}
	if (!findOng.isActive) {
		throw new AppError("ONG is inactive", 400);
	}

	await ongRepository.update(ongId, { isActive: false });
};

export default deleteOngService;
