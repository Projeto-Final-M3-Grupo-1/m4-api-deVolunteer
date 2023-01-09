import { Request, Response } from "express";

const listUser = (req: Request, res: Response) => {
  console.log(req);
  return res.status(200).json({ message: "chegou aqui" });
};

export default listUser;
