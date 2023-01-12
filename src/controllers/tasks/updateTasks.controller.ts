import { Request, Response } from "express";
import { ITaskUpdate } from "../../interfaces/tasks";
import { updateTaskService } from "../../services";

const updateTaskcontroller = async (req: Request, res: Response) => {
    const taskId: string = req.params.id;
    const taskData: ITaskUpdate = req.body;
    const updateTask = await updateTaskService(taskId, taskData);
    return res.status(200).send(updateTask);
}

export default updateTaskcontroller;