import { NextFunction, Request, Response } from "express";

const isAdminMiddleware = (
	request: Request,
	response: Response,
	next: NextFunction
) => {
	if (request.user.isAdm) {
		return next();
	} else {
		return response.status(403).json({ message: "User is not admin" });
	}
};

export default isAdminMiddleware;
