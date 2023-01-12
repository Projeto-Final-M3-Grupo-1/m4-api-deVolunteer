import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import { IprojectRequest, IprojectResponse } from "../../interfaces/projects";

const createProjectService = async (
  project: IprojectRequest
): Promise<IprojectResponse> => {
  const projectRepository = AppDataSource.getRepository(Project);
  const newProject: any = await projectRepository.create(project);
  await projectRepository.save(newProject);

  return newProject;
};

export default createProjectService;
