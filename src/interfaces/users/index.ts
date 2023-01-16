export interface iUserRequest {
  id?: string;
  name: string;
  email: string;
  password: string;
  github: string;
  linkedin: string;
  profilePicture: string;
  isAdm?: boolean;
  location?: string;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  github: string;
  linkedin: string;
  profilePicture: string;
  isAdm: boolean;
  isActive: boolean;
  technologies: any;
  createdAt: Date;
  updatedAt: Date;
}

export interface iUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  github?: string;
  linkedin?: string;
  profilePicture?: string;
}

export interface IUserData {
  id: string;
  isAdm: boolean;
  isActive: boolean;
  typeUser?: "Dev" | "ONG";
}
