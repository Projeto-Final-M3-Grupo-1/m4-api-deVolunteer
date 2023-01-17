export interface ICreateNewsData {
  title: string;
  description: string;
  site: string;
  img: string;
}

export interface INewsResponse {
  id: string;
  title: string;
  description: string;
  site: string;
  img: string;
  deletedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUpdateNewsData {
  title?: string;
  description?: string;
  site?: string;
  img?: string;
}
