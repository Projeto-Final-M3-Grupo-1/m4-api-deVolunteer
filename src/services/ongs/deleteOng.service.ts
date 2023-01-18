import AppDataSource from "../../data-source";
import Ong from "../../entities/ongs.entity";

const deleteOngService = async (ongId: string): Promise<void> => {
  const ongRepository = AppDataSource.getRepository(Ong);

  await ongRepository.update(ongId, { isActive: false });
};

export default deleteOngService;
