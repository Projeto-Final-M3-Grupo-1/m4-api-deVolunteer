import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { IUser } from "../../interfaces/users";
import { ListUsersWithoutPass } from "../../serializers/users.serializers";

const listUsersService = async (): Promise<IUser[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const usersWithoutPass = await ListUsersWithoutPass.validate(users, {
    stripUnknown: true,
  });

  return usersWithoutPass;
};

export default listUsersService;
