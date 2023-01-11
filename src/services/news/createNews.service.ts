import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";
import { iCreateNewsData, iNewsResponse } from "../../interfaces/news";

const createNewsService = async (
	newsData: iCreateNewsData
): Promise<iNewsResponse> => {
	const newsRepository = AppDataSource.getRepository(News);

	const news = newsRepository.create(newsData);

	await newsRepository.save(news);

	return news;
};

export default createNewsService;
