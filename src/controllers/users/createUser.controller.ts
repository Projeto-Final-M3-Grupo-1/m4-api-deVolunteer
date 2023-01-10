import { Request, Response } from "express";
import { CreateUserSerializerRequest } from "../../serializers/users.serializers";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const validatedData = await CreateUserSerializerRequest.validate(req.body, {
    stripUnknown: true,
  });
  const response = await createUserService(validatedData);
  return res.status(200).json(response);
};

export default createUserController;
