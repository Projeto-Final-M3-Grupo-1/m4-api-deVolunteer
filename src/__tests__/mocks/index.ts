import { ILogin } from "../../interfaces/login";
import { IOngRequest } from "../../interfaces/ongs";
import { iUserRequest } from "../../interfaces/users";

export const mockedUser: iUserRequest = {
  name: "Rafael Quadros",
  email: "rafaelquadros@mail.com",
  isAdm: false,
  password: "123456",
  github: "www.github.com",
  linkedin: "www.linkedin.com",
  profilePicture:
    "https://t.ctcdn.com.br/IVlt3nVuXYDVX4vyjzgborR84H0=/400x400/smart/i490793.jpeg",
};

export const mockedOng: IOngRequest = {
  companyName: "ABCDE",
  email: "abcde@email.com",
  password: "1234",
  cnpj: "12345678901219",
  phone: 219765478,
};

export const mockedDeleteOng: IOngRequest = {
  companyName: "Delete ONG",
  email: "delete@email.com",
  password: "1234",
  cnpj: "12345678901210",
  phone: 219765479,
};

export const mockedOngLogin: ILogin = {
  email: "abcde@email.com",
  password: "1234",
};
