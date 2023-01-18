import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";
import AppError from "../../errors/appError";
import { INewsResponse } from "../../interfaces/news";

const listNewsByIdService = async (newsId: string): Promise<INewsResponse> => {
  const newsRepository = AppDataSource.getRepository(News);

  const foundNews = await newsRepository.findOneBy({
    id: newsId
  })

  if (!foundNews) {
    throw new AppError("News not found", 404)
  }

  const news = await newsRepository.find({
    where: {
      id: newsId,
    },
    withDeleted: true,
  });

  return news[0];
};

export default listNewsByIdService;
