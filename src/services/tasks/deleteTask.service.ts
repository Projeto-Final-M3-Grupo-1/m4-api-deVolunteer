import AppDataSource from "../../data-source";
import Task from "../../entities/tasks.entity";
import Tasks_to_Projects from "../../entities/tasks_to_projects.entity";
import AppError from "../../errors/appError";

const deleteTaskService = async (taskId: string): Promise<void> => {
  const taskRepository = AppDataSource.getRepository(Task);
  const tasksToProjectsRepository =
    AppDataSource.getRepository(Tasks_to_Projects);

  const findTask = await taskRepository.findOneBy({
    id: taskId,
  });

  if (!findTask) {
    throw new AppError("Task not found", 404);
  }

  const taskInProject = await tasksToProjectsRepository.findOneBy({
    task: { id: findTask.id },
  });

  await tasksToProjectsRepository.delete({ id: taskInProject.id });
  await taskRepository.delete({ id: findTask.id });
};

export default deleteTaskService;
