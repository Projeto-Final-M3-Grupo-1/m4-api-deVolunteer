import AppDataSource from "../../data-source";
import Ong from "../../entities/ongs.entity";

export const listOngService = async (): Promise<Ong[]> => {
  const ongRepository = AppDataSource.getRepository(Ong);

  const ongs = await ongRepository.find({
    select: {
      id: true,
      companyName: true,
      email: true,
      cnpj: true,
      phone: true,
      github: true,
      ownerName: true,
      profilePicture: true,
      linkedin: true,
      createdAt: true,
      updatedAt: true,
    },
    where: {
      isActive: true,
    },
  });

  return ongs;
};
