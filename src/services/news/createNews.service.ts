import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";

const createNewsService = async (newsData: any) => {
	const newsRepository = AppDataSource.getRepository(News);

	const news = newsRepository.create(newsData);

	await newsRepository.save(news);

	return news;
};

export default createNewsService;
