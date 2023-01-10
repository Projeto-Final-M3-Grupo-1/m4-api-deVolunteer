export interface iUserRequest {
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
