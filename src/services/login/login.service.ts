import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import AppDataSource from "../../data-source";
import Ong from "../../entities/ongs.entity";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";
import { ILogin } from "../../interfaces/login";

export const loginService = async (loginData: ILogin) => {
  const userRepository = AppDataSource.getRepository(User);
  const ongRepository = AppDataSource.getRepository(Ong);

  const [findUser] = await userRepository.find({
    where: {
      email: loginData.email,
      isActive: true,
    },
  });

  const findOng = await ongRepository.findOneBy({
    email: loginData.email,
  });

  if (!findUser && !findOng) {
    throw new AppError("Invalid email or password", 403);
  }

  const password = findUser?.password || findOng?.password;

  const matchPassword = await compare(loginData.password, password);

  if (!matchPassword) {
    throw new AppError("Invalid email or password", 403);
  }

  const token = sign(
    {
      isAdm: findUser?.isAdm,
      isActive: findUser?.isActive || findOng?.isActive,
      typeUser: findUser ? "Dev" : "ONG",
    },
    process.env.SECRET_KEY!,
    { expiresIn: "24h", subject: findUser?.id || findOng?.id }
  );
  return token;
};
