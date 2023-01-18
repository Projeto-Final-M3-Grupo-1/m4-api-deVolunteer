import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import { IProjectResponse } from "../../interfaces/projects";

const listProjectService = async (): Promise<Project[]> => {
  const projectRepository = AppDataSource.getRepository(Project);
  const allProject = await projectRepository.find();
  return allProject;
};

export default listProjectService;
