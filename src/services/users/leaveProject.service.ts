import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import User from "../../entities/users.entity";
import User_to_Project from "../../entities/users_to.projects.entity";
import AppError from "../../errors/appError";
import { IUserData } from "../../interfaces/users";

const leaveProjectService = async (projectId: string, userData: IUserData) => {
  const projectRepository = AppDataSource.getRepository(Project);
  const userRespository = AppDataSource.getRepository(User);
  const userToProjectRepository = AppDataSource.getRepository(User_to_Project);

  const project: any = projectRepository.findOneBy({
    id: projectId,
  });

  if (!project) {
    throw new AppError("Project id invalid!", 404);
  }

  const user: any = userRespository.findOneBy({
    id: userData.id,
  });

  const userInProject = await userToProjectRepository.findOne({
    where: { user: user, project: project },
    relations: { user: true, project: true },
  });

  if (userInProject) {
    await userToProjectRepository.delete({
      id: userInProject.id,
    });

    return;
  } else {
    throw new AppError("User dont work on this project", 404);
  }
};

export default leaveProjectService;
