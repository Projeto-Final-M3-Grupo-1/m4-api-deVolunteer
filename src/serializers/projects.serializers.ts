import * as yup from "yup";
import {
  IProjectRequest,
  IProjectResponse,
  IProjectUpdate,
} from "../interfaces/projects";
import { SchemaOf } from "yup";

export const projectsRequestSerializer: SchemaOf<IProjectRequest> = yup
  .object()
  .shape({
    title: yup.string().required(),
    description: yup.string().required(),
    projectsPicture: yup.string().url(),
    status: yup.string(),
    ong: yup.object(),
  });
export const projectsUpdateSerializer: SchemaOf<IProjectUpdate> = yup
  .object()
  .shape({
    title: yup.string().required(),
    description: yup.string().required(),
    projectsPicture: yup.string().url(),
    status: yup.string(),
  });

export const projectsResponseSerializer: SchemaOf<IProjectResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    projectsPicture: yup.string().url(),
    status: yup.string(),
    createdAt: yup.date(),
    updatedAt: yup.date(),
  });
