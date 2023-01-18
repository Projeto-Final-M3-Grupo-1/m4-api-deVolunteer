import AppDataSource from "../../data-source";
import Ong from "../../entities/ongs.entity";
import Project from "../../entities/projects.entity";
import AppError from "../../errors/appError";
import { IProjectRequest } from "../../interfaces/projects";
import { IUserData } from "../../interfaces/users";

const createProjectService = async (
  project: IProjectRequest,
  userData: IUserData
): Promise<Project> => {
  const projectRepository = AppDataSource.getRepository(Project);
  const ongRepository = AppDataSource.getRepository(Ong);

  const projectExist = await projectRepository.findOneBy({
    title: project.title,
  });
  if (projectExist) {
    throw new AppError("Project already exists", 409);
  }

  const ong = await ongRepository.findOneBy({
    id: userData.id,
  });

  project.ong = ong;

  const newProject: Project = projectRepository.create(project);
  await projectRepository.save(newProject);

  return newProject;
};

export default createProjectService;
