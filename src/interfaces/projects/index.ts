import Ong from "../../entities/ongs.entity";

export interface IProjectRequest {
  title: string;
  description: string;
  projectsPicture: string;
  status: string;
  ong?: Ong;
}

export interface IProjectResponse {
  id: string;
  title: string;
  description: string;
  projectsPicture: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
}

export interface IProjectUpdate {
  title: string;
  description: string;
  projectsPicture: string;
  status: string;
}
