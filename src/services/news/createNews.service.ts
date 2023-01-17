import AppDataSource from "../../data-source";
import News from "../../entities/news.entity";
import User from "../../entities/users.entity";
import { ICreateNewsData, INewsResponse } from "../../interfaces/news";

const createNewsService = async (
  newsData: ICreateNewsData,
  userId: string
): Promise<INewsResponse> => {
  const newsRepository = AppDataSource.getRepository(News);
  const userRepository = AppDataSource.getRepository(User);

  const userFound = await userRepository.findOneBy({ id: userId });

  const news = newsRepository.create({
    ...newsData,
    user: userFound,
  });

  await newsRepository.save(news);

  return news;
};

export default createNewsService;
