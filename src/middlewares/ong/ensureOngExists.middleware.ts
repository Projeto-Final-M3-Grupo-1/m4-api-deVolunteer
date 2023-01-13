import { Request, Response, NextFunction } from "express";
import AppDataSource from "../../data-source";
import Ong from "../../entities/ongs.entity";
import AppError from "../../errors/appError";

const ensureOngExistsMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (req.params.id.length < 36) {
		throw new AppError("Invalid id", 404);
	}
	const ongRepository = AppDataSource.getRepository(Ong);
	const ong = await ongRepository.findOneBy({
		id: req.params.id,
	});
	if (!ong) {
		throw new AppError("Ong dont exists", 404);
	}
	return next();
};

export default ensureOngExistsMiddleware;
