import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import AppError from "../../errors/appError";

const deleteProjectService = async (projectsId: string) => {
  const projectRepository = AppDataSource.getRepository(Project);

  const findprojects = await projectRepository.findOneBy({
    id: projectsId,
  });

  if (!findprojects) {
    throw new AppError("Project not found", 404);
  }

  await projectRepository.remove(findprojects);
};

export default deleteProjectService;
