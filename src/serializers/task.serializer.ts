import * as yup from "yup";
import { SchemaOf } from "yup";
import { ITaskRequest, ITaskResponse } from "../interfaces/tasks";

export const createTaskSerrializer: SchemaOf<ITaskRequest> = yup.object().shape({
    title: yup.string().required()
});

export const returnTaskSerrializer: SchemaOf<ITaskResponse> = yup.object().shape({
    id: yup.string(),
    title: yup.string(),
    status: yup.string(),
    user: yup.string()
});

export const listTasksSerializer: SchemaOf<ITaskResponse[]> = yup.array(returnTaskSerrializer);