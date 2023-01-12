import { iUserRequest } from "../../../interfaces/users";

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
