export interface IOngRequest extends IOngResponse {
  id?: string;
  password: string;
}

export interface IOngResponse {
  companyName: string;
  email: string;
  cnpj: string;
  phone: number;
  github?: string;
  ownerName?: string;
  profilePicture?: string;
  linkedin?: string;
}

export interface IOngUpdate {
  companyName?: string;
  email?: string;
  password?: string;
  cnpj?: string;
  phone?: number;
  github?: string;
  ownerName?: string;
  profilePicture?: string;
  linkedin?: string;
}

export interface IOngResponseWithoutPassword {
  companyName: string;
  email: string;
  cnpj: string;
  phone: number;
  github?: string;
  ownerName?: string;
  profilePicture?: string;
  linkedin?: string;
  id: string;
}
