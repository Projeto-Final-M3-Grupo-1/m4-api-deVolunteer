import { Request, Response } from "express";
import { ITaskResponse } from "../../interfaces/tasks";
import { createTaskService } from "../../services";

const createTaskController = async (req: Request, res: Response) => {
    const taskData: ITaskResponse = req.body
    const userId: string = req.user.id
    const newTask = await createTaskService(taskData, userId)
    return res.status(201).send(newTask)
}

export default createTaskController