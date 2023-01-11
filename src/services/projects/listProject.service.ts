import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import { IprojectResponse } from "../../interfaces/projects";

const listProjectService = async (): Promise<IprojectResponse> => {
  const projectRepository = AppDataSource.getRepository(Project);
  const allProject: any = await projectRepository.find();
  return allProject;
};

export default listProjectService;
