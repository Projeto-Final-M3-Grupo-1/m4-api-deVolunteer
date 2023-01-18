import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";
import AppError from "../../errors/appError";

const deleteNewsService = async (id: string): Promise<void> => {
	const newsRepository = AppDataSource.getRepository(News);

	const foundNews = await newsRepository.findOneBy({
		id: id
	})

	if (!foundNews) {
		throw new AppError("News not found", 404)
	}

	await newsRepository.softDelete(id);
};

export default deleteNewsService;
