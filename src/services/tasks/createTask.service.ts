import AppDataSource from "../../data-source";
import Task from "../../entities/tasks.entity";
import User from "../../entities/users.entity";
import { ITaskRequest, ITaskResponse } from "../../interfaces/tasks";
import { returnTaskSerrializer } from "../../serializers/task.serializer";

const createTaskService = async (taskData: ITaskRequest, userId: string): Promise<ITaskResponse> => {
    const userRepository = AppDataSource.getRepository(User);
    const tasksRepository = AppDataSource.getRepository(Task);

    const user = await userRepository.findOneBy({
        id: userId
    })

    const newTask = tasksRepository.create({
        ...taskData,
        user: user
    })

    await tasksRepository.save(newTask)

    const taskValidated = await returnTaskSerrializer.validate(newTask)

    return taskValidated
}

export default createTaskService