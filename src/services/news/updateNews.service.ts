import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";

const updateNewsService = async (data: any, newsId: string) => {
	const newsRepository = AppDataSource.getRepository(News);

	const oldNews = await newsRepository.findOneBy({
		id: newsId,
	});

	const newsUpdated = await newsRepository.create({
		...oldNews,
		...data,
	});

	await newsRepository.save(newsUpdated);

	return newsUpdated;
};

export default updateNewsService;
