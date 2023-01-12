import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";
import { iNewsResponse } from "../../interfaces/news";

const listNewsByIdService = async (
	newsId: string
): Promise<iNewsResponse> => {
	const newsRepository = AppDataSource.getRepository(News);

	const news = await newsRepository.find({
		where: {
			id: newsId,
		},
		withDeleted: true,
	});

	return news[0];
};

export default listNewsByIdService;
