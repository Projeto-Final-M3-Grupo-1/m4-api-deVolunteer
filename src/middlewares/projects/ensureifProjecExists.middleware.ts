import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import AppError from "../../errors/appError";

const ensureIfProjecExistMiddleware = () => () => {};

export default ensureIfProjecExistMiddleware;
