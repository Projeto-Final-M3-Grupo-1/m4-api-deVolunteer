import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";

const listNewsService = async () => {
	const newsRepository = AppDataSource.getRepository(News);

	const news = await newsRepository.find();

	return news;
};

export default listNewsService;
