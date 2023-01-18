import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";
import AppError from "../../errors/appError";
import { INewsResponse, IUpdateNewsData } from "../../interfaces/news";

const updateNewsService = async (data: IUpdateNewsData, newsId: string) => {
  const newsRepository = AppDataSource.getRepository(News);

  const oldNews: INewsResponse = await newsRepository.findOneBy({
    id: newsId,
  });

  if (!oldNews) {
    throw new AppError("News not found", 404)
  }

  const newsUpdated: INewsResponse = await newsRepository.create({
    ...oldNews,
    ...data,
  });

  await newsRepository.save(newsUpdated);

  return newsUpdated;
};

export default updateNewsService;
