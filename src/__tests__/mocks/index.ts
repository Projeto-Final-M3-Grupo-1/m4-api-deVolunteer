import { ILogin } from "../../interfaces/login";
import { IOngRequest } from "../../interfaces/ongs";
import { ITaskRequest } from "../../interfaces/tasks";
import { iUserRequest } from "../../interfaces/users";

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

export const mockedAdminUser: iUserRequest = {
  name: "Gabs Ghidini",
  email: "gabsghidini@mail.com",
  isAdm: true,
  password: "123456",
  github: "www.github.com",
  linkedin: "www.linkedin.com",
  profilePicture: "https://thiscatdoesnotexist.com/",
};

export const mockedNews = {
  title: "Olá mundo!",
  description: "Olá sou a primeira notícia",
  site: "https://www.google.com.br",
  img: "https://thiscatdoesnotexist.com/",
};

export const mockedToBeDeletedNews = {
  title: "Olá mundo!",
  description: "Vou ser deletada",
  site: "https://www.google.com.br",
  img: "https://thiscatdoesnotexist.com/",
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


export const mockedLogin: ILogin = {
  email: "rafaelquadros@mail.com",
  password: "123456",
};

export const mockedTask: ITaskRequest = {
	title: "Create session"
};

export const mockedTaskToBeDelete: ITaskRequest = {
	title: "task to delete"
};

export const mockedAdminLogin: ILogin = {
	email: "gabsghidini@mail.com",
	password: "123456"
}

