import { Request, Response } from "express";
import { deleteTaskService } from "../../services";

const deleteTaskController = async (req: Request, res: Response) => {
    const TaskId: string = req.params.id
    const deleteTask = await deleteTaskService(TaskId)
    return res.status(204).send(deleteTask)
};

export default deleteTaskController;