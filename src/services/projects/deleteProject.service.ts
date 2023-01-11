import AppDataSource from "../../data-source";
import Project from "../../entities/projects.entity";

const deleteProjectService = async (id: string): Promise<void> => {
  const projectRepository = AppDataSource.getRepository(Project);
  const foundProject = await projectRepository.findOneBy({
    id: id,
  });

  await projectRepository.update(
    {
      id,
    },
    {
      status: "desatived",
    }
  );
};

export default deleteProjectService;
