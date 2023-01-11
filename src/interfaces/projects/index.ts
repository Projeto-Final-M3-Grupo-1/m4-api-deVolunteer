export interface IprojectRequest {
  title: string;
  description: string;
  projectsPicture: string;
  status: string;
}

export interface IprojectResponse {
  id: string;
  title: string;
  description: string;
  projectsPicture: string;
  createdAt: Date;
  updatedAt: Date;
  status: string;
}

export interface IprojectUpdate {
  title: string;
  description: string;
  projectsPicture: string;
  status: string;
}
