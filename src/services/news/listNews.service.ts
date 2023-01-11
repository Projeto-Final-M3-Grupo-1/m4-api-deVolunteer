import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";
import { iNewsResponse } from "../../interfaces/news";

const listNewsService = async (): Promise<iNewsResponse[]> => {
	const newsRepository = AppDataSource.getRepository(News);

	const news = await newsRepository.find();

	return news;
};

export default listNewsService;
