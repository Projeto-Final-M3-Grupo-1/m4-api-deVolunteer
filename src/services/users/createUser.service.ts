import AppDataSource from "../../data-source";
import Ong from "../../entities/ongs.entity";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";
import { IUser, IUserRequest } from "../../interfaces/users";
import { CreateUserSerializerWithoutPass } from "../../serializers/users.serializers";
import { getLocation } from "../../utils";

const createUserService = async (userData: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const ongRepository = AppDataSource.getRepository(Ong);

  const repetedEmail = await ongRepository.findOneBy({
    email: userData.email,
  });

  const userExists = await userRepository.findOneBy({
    email: userData.email,
  });

  if (repetedEmail) {
    throw new AppError("E-mail has already been registered", 409);
  }
  if (userExists) {
    throw new AppError("E-mail has already been registered", 409);
  }

  userData.location = await getLocation();

  const user = userRepository.create(userData);
  await userRepository.save(user);

  const userWithoutPass: IUser = await CreateUserSerializerWithoutPass.validate(
    user,
    {
      stripUnknown: true,
    }
  );

  return userWithoutPass;
};

export default createUserService;
