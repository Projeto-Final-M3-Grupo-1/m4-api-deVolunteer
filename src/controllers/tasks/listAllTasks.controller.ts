import { Request, Response } from "express";
import { listAllTasksService } from "../../services";

const listAllTasksController = async (req: Request, res: Response) => {
    const allTasks = await listAllTasksService()
    return res.status(200).json(allTasks)
}   

export default listAllTasksController