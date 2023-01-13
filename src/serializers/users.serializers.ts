import * as yup from "yup";
import { SchemaOf } from "yup";
import { iUser, iUserRequest } from "../interfaces/users";

export const CreateUserSerializerWithoutPass: SchemaOf<iUser> = yup
  .object()
  .shape({
    id: yup.string().required(),
    name: yup.string().required(),
    email: yup.string().required(),
    github: yup.string().required(),
    linkedin: yup.string().required(),
    profilePicture: yup.string().required(),
    isAdm: yup.boolean().notRequired(),
    isActive: yup.boolean().required(),
    technologies: yup.array().notRequired(),
    createdAt: yup.date().required(),
    updatedAt: yup.date().required(),
    location: yup.string().required(),
  });

export const CreateUserSerializerRequest: SchemaOf<iUserRequest> = yup
  .object()
  .shape({
    name: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    github: yup.string().required(),
    linkedin: yup.string().required(),
    profilePicture: yup.string().required(),
    isAdm: yup.boolean().notRequired(),
    location: yup.string().required(),
  });

export const ListUsersWithoutPass: SchemaOf<iUser[]> = yup.array(
  CreateUserSerializerWithoutPass
);
