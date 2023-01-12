import { ILogin } from "../../../interfaces/login";
import { iUserRequest } from "../../../interfaces/users";

export const mockedAdmin: iUserRequest = {
  name: "Rafael Quadros",
  email: "rafaelquadros@mail.com",
  isAdm: true,
  password: "123456",
  github: "www.github.com",
  linkedin: "www.linkedin.com",
  profilePicture:
    "https://t.ctcdn.com.br/IVlt3nVuXYDVX4vyjzgborR84H0=/400x400/smart/i490793.jpeg",
};

export const mockedUser: iUserRequest = {
  name: "bruno",
  email: "bruno@mail.com",
  isAdm: false,
  password: "123456",
  github: "www.github.com",
  linkedin: "www.linkedin.com",
  profilePicture:
    "https://t.ctcdn.com.br/IVlt3nVuXYDVX4vyjzgborR84H0=/400x400/smart/i490793.jpeg",
};

export const mockedAdminLogin: ILogin = {
  email: "rafaelquadros@mail.com",
  password: "123456",
};

export const mockedUserLogin: ILogin = {
  email: "bruno@mail.com",
  password: "123456",
};
