import AppDataSource from "../../data-source";
import Task from "../../entities/tasks.entity";
import User from "../../entities/users.entity";
import { IUserData } from "../../interfaces/users";

const applyOnTaskService = async (taskId: string, userData: IUserData) => {
  const taskRepository = AppDataSource.getRepository(Task);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id: userData.id });
  const task = await taskRepository.findOneBy({ id: taskId });

  await taskRepository.update(task.id, { status: "develop", user: user });

  const response = await taskRepository.findOne({
    where: { id: task.id },
    relations: { user: true },
  });

  return response;
};

export default applyOnTaskService;
