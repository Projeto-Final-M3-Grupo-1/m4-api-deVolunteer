import AppDataSource from "../../data-source";
import Ong from "../../entities/ongs.entity";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";
import { IOngRequest, IOngResponse } from "../../interfaces/ongs";
import { ongWithoutPassword } from "../../serializers/ong.serializers";

const createOngService = async (
  ongData: IOngRequest
): Promise<IOngResponse> => {
  const ongRepository = AppDataSource.getRepository(Ong);
  const userRepository = AppDataSource.getRepository(User);

  const repetedEmail = await userRepository.findOneBy({
    email: ongData.email,
  });

  if (repetedEmail) {
    throw new AppError("E-mail has already been registered", 409);
  }

  const repetedOng = await ongRepository.findOne({
    where: [{ email: ongData.email }, { cnpj: ongData.cnpj }],
  });

  if (repetedOng) {
    throw new AppError("ONG already exists", 409);
  }

  const createdOng = ongRepository.create(ongData);

  await ongRepository.save({ ...createdOng });

  const ong = (await ongRepository.findOneBy({
    email: ongData.email,
  })) as Ong;

  const ongValidated = await ongWithoutPassword.validate(ong, {
    stripUnknown: true,
  });

  return ongValidated;
};

export default createOngService;
