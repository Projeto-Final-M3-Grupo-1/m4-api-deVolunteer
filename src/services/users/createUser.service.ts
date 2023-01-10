import AppDataSource from "../../data-source";
import User from "../../entities/users.entity";
import { iUser, iUserRequest } from "../../interfaces/users";
import { CreateUserSerializerWithoutPass } from "../../serializers/users.serializers";
import { getLocation } from "../../utils";

const createUserService = async (userData: iUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  userData.location = await getLocation();

  console.log(userData);
  const user = userRepository.create(userData);
  await userRepository.save(user);

  const userWithoutPass: iUser = await CreateUserSerializerWithoutPass.validate(
    user,
    {
      stripUnknown: true,
    }
  );

  return userWithoutPass;
};

export default createUserService;
