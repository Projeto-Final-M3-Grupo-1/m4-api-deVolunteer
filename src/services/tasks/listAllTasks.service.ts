import AppDataSource from "../../data-source";
import Task from "../../entities/tasks.entity";
import { ITaskResponse } from "../../interfaces/tasks";
import { listTasksSerializer } from "../../serializers/task.serializer";

const listAllTasksService = async (): Promise<ITaskResponse[]> => {
    const taskRepository = AppDataSource.getRepository(Task)

    const allTasks = await taskRepository.find()

    const allTasksValidated = await listTasksSerializer.validate(allTasks);

    return allTasksValidated
}

export default listAllTasksService