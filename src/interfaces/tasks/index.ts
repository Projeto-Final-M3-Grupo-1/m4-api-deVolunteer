export interface ITaskRequest {
  title: string;
}

export interface ITaskResponse {
  id: string;
  title: string;
  status: string;
  user: string | null;
}

export interface ITaskUpdate {
  title?: string;
}
