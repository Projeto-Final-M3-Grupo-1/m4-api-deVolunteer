import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { iUser, iUserUpdate } from "../../interfaces/users";
import { CreateUserSerializerWithoutPass } from "../../serializers/users.serializers";

const updateUserService = async (
  userData: iUserUpdate,
  userId: string
): Promise<iUser> => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  const userUpdated = await userRepository.create({
    ...findUser,
    ...userData,
  });

  await userRepository.save(userUpdated);

  const userWithoutPass = await CreateUserSerializerWithoutPass.validate(
    userUpdated,
    {
      stripUnknown: true,
    }
  );

  return userWithoutPass;
};

export default updateUserService;
