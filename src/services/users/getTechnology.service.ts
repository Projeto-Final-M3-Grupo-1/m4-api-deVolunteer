import AppDataSource from "../../data-source";
import Technology from "../../entities/technologies.entity";
import User from "../../entities/users.entity";
import User_to_Technology from "../../entities/users_to_technologies.entity";
import AppError from "../../errors/appError";
import { IUserData } from "../../interfaces/users";

const getTechnologieService = async (
  userData: IUserData,
  technologyId: string
) => {
  const userRepository = AppDataSource.getRepository(User);

  const user: IUserData = await userRepository.findOneBy({
    id: userData.id,
  });

  const technologiesRepository = AppDataSource.getRepository(Technology);

  const technology = await technologiesRepository.findOneBy({
    id: technologyId,
  });

  if (!technology) {
    throw new AppError("Invalid id");
  }

  const userToTechnologyRepository =
    AppDataSource.getRepository(User_to_Technology);

  const addTechnology: User_to_Technology =
    await userToTechnologyRepository.create({
      user: user,
      technologies: technology,
    });
  await userToTechnologyRepository.save(addTechnology);

  const userAndTechnologies: any = await userRepository
    .createQueryBuilder("users")
    .innerJoinAndSelect("users.technologies", "users_to_technologies")
    .innerJoinAndSelect("users_to_technologies.technologies", "technologies")
    .where("users_to_technologies.user = :id_user", { id_user: userData.id })
    .getOne();

  return userAndTechnologies;
};

export default getTechnologieService;
