import AppDataSource from "../../data-source";
import Ong from "../../entities/ongs.entity";

const listOngByIdService = async (id: string) => {
	const ongRepo = AppDataSource.getRepository(Ong);

	const ong = await ongRepo.findOneBy({ id });

	return ong;
};

export default listOngByIdService;
