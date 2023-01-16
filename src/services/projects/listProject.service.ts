import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import { IProjectResponse } from "../../interfaces/projects";

const listProjectService = async (): Promise<IProjectResponse> => {
  const projectRepository = AppDataSource.getRepository(Project);
  const allProject: any = await projectRepository.find();
  return allProject;
};

export default listProjectService;
