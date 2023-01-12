import AppDataSource from "../../data-source";
import Technology from "../../entities/technologies.entity";
import { iTechResponse } from "../../interfaces/technologies";

const listTechnologiesService = async (): Promise<iTechResponse[]> => {
  const technologiesRepository = AppDataSource.getRepository(Technology);

  const technologies = await technologiesRepository.find();

  return technologies;
};

export default listTechnologiesService;
