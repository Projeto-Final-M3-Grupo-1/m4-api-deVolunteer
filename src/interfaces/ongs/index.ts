export interface IOngRequest extends IOngResponse {
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
