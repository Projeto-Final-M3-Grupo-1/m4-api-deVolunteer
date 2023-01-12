import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";
import { iNewsResponse, iUpdateNewsData } from "../../interfaces/news";

const updateNewsService = async (data: iUpdateNewsData, newsId: string) => {
	const newsRepository = AppDataSource.getRepository(News);

	const oldNews: iNewsResponse = await newsRepository.findOneBy({
		id: newsId,
	});

	const newsUpdated: iNewsResponse = await newsRepository.create({
		...oldNews,
		...data,
	});

	await newsRepository.save(newsUpdated);

	return newsUpdated;
};

export default updateNewsService;
