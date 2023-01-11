import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import { IprojectUpdate, IprojectResponse } from "../../interfaces/projects";

const updateUserService = async (
  projecData: IprojectUpdate,
  projectId: string
): Promise<IprojectResponse> => {
  const projectRepository = AppDataSource.getRepository(Project);

  const foundProject = await projectRepository.findOneBy({
    id: projectId,
  });

  const projectUpdated: any = projectRepository.create({
    ...foundProject,
    ...projecData,
  });

  await projectRepository.save(projectUpdated);

  return projectUpdated;
};

export default updateUserService;
