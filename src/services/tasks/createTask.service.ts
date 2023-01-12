import AppDataSource from "../../data-source";
import Task from "../../entities/tasks.entity";
import User from "../../entities/users.entity";
import AppError from "../../errors/appError";
import { ITaskRequest, ITaskResponse } from "../../interfaces/tasks";
import { returnTaskSerrializer } from "../../serializers/task.serializer";

const createTaskService = async (taskData: ITaskRequest): Promise<ITaskResponse> => {
    const tasksRepository = AppDataSource.getRepository(Task);

    const task = await tasksRepository.findOneBy({
        title: taskData.title
    })

    if (task) {
        throw new AppError("Task already exists", 409)
    }

    const newTask = tasksRepository.create({
        ...taskData
    })

    await tasksRepository.save(newTask)

    const taskValidated = await returnTaskSerrializer.validate(newTask)

    return taskValidated
}

export default createTaskService