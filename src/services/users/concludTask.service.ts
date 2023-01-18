import AppDataSource from "../../data-source";
import Task from "../../entities/tasks.entity";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";
import { IUserData } from "../../interfaces/users";

const concludTaskService = async (taskId: string, userData: IUserData) => {
  const taskRepository = AppDataSource.getRepository(Task);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userData.id });
  const task = await taskRepository.findOne({
    where: { id: taskId, user: { id: user.id } },
    relations: { user: true },
  });

  if (!task) {
    throw new AppError("You dont work in this task", 404);
  }

  await taskRepository.update(task.id, { status: "concluded" });

  const response = await taskRepository.findOne({
    where: { id: taskId },
    relations: { user: true },
  });

  return response;
};

export default concludTaskService;
