import { NextFunction, Request, Response } from "express";
import AppError from "../errors/appError";

const errorMiddleware = (
	error: any,
	request: Request,
	response: Response,
	next: NextFunction
) => {
	if (error instanceof AppError) {
		const { statusCode, message } = error;
		return response.status(statusCode).json({ message });
	}

	return response.status(500).json({ message: "Internal Server Error" });
};

export default errorMiddleware;
