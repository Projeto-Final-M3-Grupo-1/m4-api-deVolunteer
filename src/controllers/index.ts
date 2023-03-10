/* Users */
import listUserController from "./users/listUsers.controller";
import createUserController from "./users/createUser.controller";
import deleteUserController from "./users/deleteUser.controller";
import updateUserController from "./users/updateUser.controller";
import getTechnologieController from "./users/getTechnology.controller";
import applyOnProjectController from "./users/applyOnProject.controller";
import leaveProjectController from "./users/leaveProject.controller";
import applyOnTaskController from "./users/applyOnTask.controller";
import concludTaskControler from "./users/concludTask.controller";

/* News */
import createNewsController from "./news/createNews.controller";
import listNewsController from "./news/listNews.controller";
import deleteNewsController from "./news/deleteNews.controller";
import updateNewsController from "./news/updateNews.controller";
import listNewsByIdController from "./news/listNewsById.controller";

/* Ongs */
import createOngController from "./ongs/createOng.controller";
import deleteOngController from "./ongs/deleteOng.controller";
import listOngController from "./ongs/listOng.controller";
import updateOngController from "./ongs/updateOng.controller";

/* Login */
import loginController from "./login/login.controller";

import createTaskController from "./tasks/createTasks.controller";
import listAllTasksController from "./tasks/listTasks.controller";
import updateTaskcontroller from "./tasks/updateTasks.controller";
import deleteTaskController from "./tasks/deleteTask.controller";

/* Technologies */
import insertTechnologiesController from "./technologies/insertTechnologies.controller";
import listTechnologiesController from "./technologies/listTechnologies.controller";
import deleteTechnologyController from "./users/deleteTechnology.controller";

/* Profile */
import listUserProfileByIdController from "./profile/listUserProfileById.controller";
import listOngByIdController from "./profile/listOngProfileById.controller";

/* Projects */
import createProjectController from "./projects/createProject.controller";
import deleteProjectController from "./projects/deleteProject.controller";
import updateProjectController from "./projects/updateProject.controller";
import listProjectController from "./projects/listProject.controller";

export {
  listUserController,
  createUserController,
  deleteUserController,
  updateUserController,
  createNewsController,
  listNewsController,
  deleteNewsController,
  updateNewsController,
  listNewsByIdController,
  createOngController,
  deleteOngController,
  listOngController,
  updateOngController,
  loginController,
  insertTechnologiesController,
  createTaskController,
  listAllTasksController,
  updateTaskcontroller,
  deleteTaskController,
  listTechnologiesController,
  listUserProfileByIdController,
  listOngByIdController,
  getTechnologieController,
  deleteTechnologyController,
  applyOnProjectController,
  leaveProjectController,
  createProjectController,
  deleteProjectController,
  updateProjectController,
  listProjectController,
  applyOnTaskController,
  concludTaskControler,
};
