import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";

const listUserProfileByIdService = async (id: string) => {
  const profileRepo = await AppDataSource.getRepository(User);

  const profile = await profileRepo.findOneBy({ id });

  return profile;
};

export default listUserProfileByIdService;
