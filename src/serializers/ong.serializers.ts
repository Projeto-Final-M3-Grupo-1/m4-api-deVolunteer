import * as yup from "yup";

export const ongSchema = yup.object().shape({
  companyName: yup.string().required(),
  email: yup.string().email().required(),

  password: yup.string().required(),
  cnpj: yup.string().min(14).max(14).required(),
  phone: yup.number().required(),
  github: yup.string(),
  ownerName: yup.string(),
  profilePicture: yup.string().url(),
  linkedin: yup.string().url(),
});
