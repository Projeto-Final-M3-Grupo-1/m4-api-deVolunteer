import AppDataSource from "../../data-source";
import User_to_Technology from "../../entities/users_to_technologies.entity";

const deleteTechnologyService = (technologyId: string) => {
  const technologiesRepository =
    AppDataSource.getRepository(User_to_Technology);

  technologiesRepository.delete({
    id: technologyId,
  });
};
export default deleteTechnologyService;
