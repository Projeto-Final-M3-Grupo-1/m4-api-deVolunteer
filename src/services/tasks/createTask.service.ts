import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import Task from "../../entities/tasks.entity";
import Tasks_to_Projects from "../../entities/tasks_to_projects.entity";
import AppError from "../../errors/appError";
import { ITaskRequest, ITaskResponse } from "../../interfaces/tasks";

const createTaskService = async (
  projectId: string,
  taskData: ITaskRequest
): Promise<Project> => {
  const tasksRepository = AppDataSource.getRepository(Task);
  const projectRepository = AppDataSource.getRepository(Project);
  const tasksToProjectsRepository =
    AppDataSource.getRepository(Tasks_to_Projects);

  const foundtask = await tasksRepository.findOneBy({
    title: taskData.title,
  });

  if (foundtask) {
    throw new AppError("Task already exists", 409);
  }

  const foundProject = await projectRepository.findOneBy({
    id: projectId,
  });

  if (!foundProject) {
    throw new AppError("Project not found", 404);
  }

  const newTask = tasksRepository.create({
    ...taskData,
  });
  await tasksRepository.save(newTask);

  const taskOnProject = await tasksToProjectsRepository.create({
    project: foundProject,
    task: newTask,
  });
  await tasksToProjectsRepository.save(taskOnProject);

  const projectsAndTasks = await projectRepository
    .createQueryBuilder("projects")
    .innerJoinAndSelect("projects.tasks", "tasks_to_projects")
    .innerJoinAndSelect("tasks_to_projects.task", "task")
    .where("tasks_to_projects.project = :id_project", {
      id_project: foundProject.id,
    })
    .where("tasks_to_projects.task = :id_task", { id_task: newTask.id })
    .getOne();

  return projectsAndTasks;
};

export default createTaskService;
