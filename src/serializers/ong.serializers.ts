import { hashSync } from "bcryptjs";
import * as yup from "yup";

export const ongSerializer = yup.object().shape({
  companyName: yup.string().required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .required()
    .transform((value, originalValue) => hashSync(originalValue, 10)),
  cnpj: yup.string().min(14).max(14).required(),
  phone: yup.number().required(),
  github: yup.string(),
  ownerName: yup.string(),
  profilePicture: yup.string().url(),
  linkedin: yup.string().url(),
});

export const ongUpdateSerializer = yup.object().shape({
  companyName: yup.string(),
  email: yup.string().email(),
  password: yup
    .string()
    .transform((value, originalValue) => hashSync(originalValue, 10)),
  cnpj: yup.string().min(14).max(14),
  phone: yup.number(),
  github: yup.string(),
  ownerName: yup.string(),
  profilePicture: yup.string().url(),
  linkedin: yup.string().url(),
});

export const arrayOngWithoutPassword = yup.array().of(
  yup.object().shape({
    companyName: yup.string(),
    email: yup.string().email(),
    cnpj: yup.string().min(14).max(14),
    phone: yup.number(),
    github: yup.mixed(),
    ownerName: yup.mixed(),
    profilePicture: yup.mixed(),
    linkedin: yup.mixed(),
    isAdm: yup.boolean(),
    isActive: yup.boolean(),
    id: yup.string(),
    createdAt: yup.date(),
    updatedAt: yup.date(),
  })
);

export const withoutPasswordOngSerializer = yup.object().shape({
  companyName: yup.string(),
  email: yup.string().email(),
  cnpj: yup.string().min(14).max(14),
  phone: yup.number(),
  github: yup.string(),
  ownerName: yup.string(),
  profilePicture: yup.string().url(),
  linkedin: yup.string().url(),
  isAdm: yup.boolean(),
  isActive: yup.boolean(),
  id: yup.string(),
});
