import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";
import { INewsResponse } from "../../interfaces/news";

const listNewsService = async (): Promise<INewsResponse[]> => {
  const newsRepository = AppDataSource.getRepository(News);

  const news = await newsRepository.find();

  return news;
};

export default listNewsService;
