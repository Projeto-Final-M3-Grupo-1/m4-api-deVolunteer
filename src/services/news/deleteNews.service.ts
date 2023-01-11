import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";

const deleteNewsService = async (id: string): Promise<void> => {
	const newsRepository = AppDataSource.getRepository(News);

	await newsRepository.softDelete(id);
};

export default deleteNewsService;
