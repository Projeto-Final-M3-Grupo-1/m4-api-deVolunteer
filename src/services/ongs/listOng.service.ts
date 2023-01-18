import AppDataSource from "../../data-source";
import Ong from "../../entities/ongs.entity";
import { IOngResponseWithoutPassword } from "../../interfaces/ongs";
import { arrayOngWithoutPassword } from "../../serializers/ong.serializers";


const listOngService = async (): Promise<IOngResponseWithoutPassword[]> => {
  const ongRepository = AppDataSource.getRepository(Ong);

  const ongs = await ongRepository.find({
    where: {
      isActive: true,
    },
  });


  const ongWithoutPassword = await arrayOngWithoutPassword.validate(ongs, {
    stripUnknown: true,
  });

  return ongWithoutPassword;

};

export default listOngService;
