import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import User from "../../entities/users.entity";
import User_to_Project from "../../entities/users_to.projects.entity";
import AppError from "../../errors/appError";
import { IUserData } from "../../interfaces/users";

const applyOnProjectService = async (
  projectId: string,
  userData: IUserData
) => {
  const projectRepository = AppDataSource.getRepository(Project);
  const userRespository = AppDataSource.getRepository(User);
  const userToProjectRepository = AppDataSource.getRepository(User_to_Project);

  const project = await projectRepository.findOneBy({
    id: projectId,
  });

  if (!project) {
    throw new AppError("Project id invalid", 404);
  }

  const user = await userRespository.findOneBy({
    id: userData.id,
  });

  const userInProject = await userToProjectRepository.create({
    project: project,
    user: user,
  });
  await userToProjectRepository.save(userInProject);

  const projectsAndUsers: any = await projectRepository
    .createQueryBuilder("projects")
    .innerJoinAndSelect("projects.users", "users_to_projects")
    .innerJoinAndSelect("projects.ong", "ong")
    .innerJoinAndSelect("users_to_projects.user", "user")
    .where("users_to_projects.project = :id_project", {
      id_project: project.id,
    })
    .getOne();

  return projectsAndUsers;
};

export default applyOnProjectService;
