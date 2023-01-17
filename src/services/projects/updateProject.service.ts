import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import { IProjectUpdate, IProjectResponse } from "../../interfaces/projects";

const updateProjectService = async (
  projecData: IProjectUpdate,
  projectId: string
): Promise<IProjectResponse> => {
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

export default updateProjectService;
