import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import AppError from "../../errors/appError";
import { IprojectRequest, IprojectResponse } from "../../interfaces/projects";

const createProjectService = async (
  project: IprojectRequest
): Promise<IprojectResponse> => {
  const projectRepository = AppDataSource.getRepository(Project);
  const projectExist = await projectRepository.findOneBy({
    title: project.title,
  });
  if (projectExist) {
    throw new AppError("Project already exists", 409);
  }
  const newProject: any = await projectRepository.create(project);
  await projectRepository.save(newProject);

  return newProject;
};

export default createProjectService;
