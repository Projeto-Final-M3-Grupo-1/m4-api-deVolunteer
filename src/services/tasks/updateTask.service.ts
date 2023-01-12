import AppDataSource from "../../data-source";
import Task from "../../entities/tasks.entity";
import { ITaskResponse, ITaskUpdate } from "../../interfaces/tasks";
import { returnTaskSerrializer } from "../../serializers/task.serializer";

const updateTaskService = async (taskId: string, taskData: ITaskUpdate): Promise<ITaskResponse> => {
    const taskRepository = AppDataSource.getRepository(Task);
    
    const findTask = await taskRepository.findOneBy({
        id: taskId
    });

    const updateTask = taskRepository.create({
        ...findTask,
        ...taskData
    });

    await taskRepository.save(updateTask);

    const updateTaskValidated = await returnTaskSerrializer.validate(updateTask);

    return updateTaskValidated;

}

export default updateTaskService;