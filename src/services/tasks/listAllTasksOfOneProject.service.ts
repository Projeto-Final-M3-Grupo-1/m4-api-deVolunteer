import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";

const listAllTasksService = async (projectId: string): Promise<Project> => {
  const projectRepository = AppDataSource.getRepository(Project);

  const project = await projectRepository.findOneBy({ id: projectId });

  const projectsAndTasks = await projectRepository
    .createQueryBuilder("projects")
    .innerJoinAndSelect("projects.tasks", "tasks_to_projects")
    .innerJoinAndSelect("tasks_to_projects.task", "task")
    .where("tasks_to_projects.project = :id_project", {
      id_project: project.id,
    })
    .getOne();

  return projectsAndTasks;
};

export default listAllTasksService;
