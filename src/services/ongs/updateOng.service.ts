import { validate } from "uuid";
import AppDataSource from "../../data-source";
import Ong from "../../entities/ongs.entity";
import AppError from "../../errors/appError";
import { IOngResponseWithoutPassword, IOngUpdate } from "../../interfaces/ongs";

const updateOngService = async (
  ongData: IOngUpdate,
  ongId: string
): Promise<IOngResponseWithoutPassword> => {
  const ongRepository = AppDataSource.getRepository(Ong);

  await ongRepository.update(ongId, ongData);

  const { password, ...findRegisteredOng } = (await ongRepository.findOneBy({
    id: ongId,
  })) as Ong;

  return findRegisteredOng;
};

export default updateOngService;
