import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";

const listAllTasksService = async (projectId: string): Promise<any> => {
  const projectRepository = AppDataSource.getRepository(Project);

  const project: any = await projectRepository.findOneBy({ id: projectId });

  const projectsAndTasks: any = await projectRepository
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
