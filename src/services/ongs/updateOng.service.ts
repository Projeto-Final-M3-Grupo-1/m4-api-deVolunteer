import { validate } from "uuid";
import AppDataSource from "../../data-source";
import Ong from "../../entities/ongs.entity";
import AppError from "../../errors/appError";
import { IOngUpdate } from "../../interfaces/ongs";

const updateOngService = async (
  ongData: IOngUpdate,
  ongId: string
): Promise<any> => {
  const ongRepository = AppDataSource.getRepository(Ong);

  if (
    Object.keys(ongData).includes("isAdm") ||
    Object.keys(ongData).includes("isActive") ||
    Object.keys(ongData).includes("id")
  ) {
    throw new AppError("You cannot update is adm", 401);
  }

  await ongRepository.update(ongId, ongData);

  const { password, ...findRegisteredOng } = (await ongRepository.findOneBy({
    id: ongId,
  })) as Ong;

  return findRegisteredOng;
};

export default updateOngService;
