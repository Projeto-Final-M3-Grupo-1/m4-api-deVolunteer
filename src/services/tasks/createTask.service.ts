import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";
import Task from "../../entities/tasks.entity";
import AppError from "../../errors/appError";
import { ITaskRequest, ITaskResponse } from "../../interfaces/tasks";
import { returnTaskSerrializer } from "../../serializers/task.serializer";

const createTaskService = async (
  projectId: string, taskData: ITaskRequest
): Promise<ITaskResponse> => {
  const tasksRepository = AppDataSource.getRepository(Task);
  const projectRepository = AppDataSource.getRepository(Project);

  const foundtask = await tasksRepository.findOneBy({
    title: taskData.title,
  });

  if (foundtask) {
    throw new AppError("Task already exists", 409);
  }

  const foundProject = await projectRepository.findOneBy({
    id: projectId
  })

  if (!foundProject) {
    throw new AppError("Project not found", 404)
  }

  const newTask = tasksRepository.create({
    ...taskData,
    project: foundProject
  });

  await tasksRepository.save(newTask);

const taskVlidated = await returnTaskSerrializer.validate(newTask)

  return taskVlidated;
};

export default createTaskService;
