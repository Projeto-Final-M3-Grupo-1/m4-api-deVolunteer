import AppDataSource from "../../data-source";
import Task from "../../entities/tasks.entity";
import AppError from "../../errors/appError";

const deleteTaskService = async (taskId: string) => {
    const taskRepository = AppDataSource.getRepository(Task)

    const findTask = await taskRepository.findOneBy({
        id: taskId
    })

    if (!findTask) {
        throw new AppError("Task not found", 404);
    };

    const deleteTask = await taskRepository.remove(findTask)

    return deleteTask
};

export default deleteTaskService;