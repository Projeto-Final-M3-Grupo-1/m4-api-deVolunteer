import AppDataSource from "../../data-source";
import Technology from "../../entities/technologies.entity";
import AppError from "../../errors/appError";
import techs from "./data";

const insertTechnologiesService = async (secretCode: string) => {
  const technologiesRepository = AppDataSource.getRepository(Technology);

  if (secretCode !== process.env.PG_CODE_FOR_INSERT_TECHS) {
    throw new AppError("You dont have do this", 500);
  }

  techs.forEach(async (element) => {
    const technologies = technologiesRepository.create(element);
    await technologiesRepository.save(technologies);
  });

  const technologies = await technologiesRepository.find();

  return technologies;
};

export default insertTechnologiesService;
