import * as yup from "yup";
import {
  IprojectRequest,
  IprojectResponse,
  IprojectUpdate,
} from "../interfaces/projects";
import { SchemaOf } from "yup";

export const projectsRequestSerializer: SchemaOf<IprojectRequest> = yup
  .object()
  .shape({
    title: yup.string().required(),
    description: yup.string().required(),
    projectsPicture: yup.string().url(),
    status: yup.string(),
  });
export const projectsUpdateSerializer: SchemaOf<IprojectUpdate> = yup
  .object()
  .shape({
    title: yup.string().required(),
    description: yup.string().required(),
    projectsPicture: yup.string().url(),
    status: yup.string(),
  });

export const projectsResponseSerializer: SchemaOf<IprojectResponse> = yup
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
