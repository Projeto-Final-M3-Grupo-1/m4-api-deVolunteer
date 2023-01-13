/* Users */
import createUserService from "./users/createUser.service";
import deleteUserService from "./users/deleteUser.service";
import listUsersService from "./users/listUsers.service";
import updateUserService from "./users/updateUser.service";
import getTechnologieService from "./users/getTechnology.service";

/* News */
import createNewsService from "./news/createNews.service";
import listNewsService from "./news/listNews.service";
import deleteNewsService from "./news/deleteNews.service";
import updateNewsService from "./news/updateNews.service";
import listNewsByIdService from "./news/listNewsById.service";

/* Ongs */
import createOngService from "./ongs/createOng.service";
import deleteOngService from "./ongs/deleteOng.service";
import listOngService from "./ongs/listOng.service";
import updateOngService from "./ongs/updateOng.service";

/* Login */
import loginService from "./login/login.service";

/* Tasks */
import createTaskService from "./tasks/createTask.service";
import listAllTasksService from "./tasks/listAllTasks.service";
import updateTaskService from "./tasks/updateTask.service";
import deleteTaskService from "./tasks/deleteTask.service";

/* Technologies */
import insertTechnologiesService from "./technologies/insertTechnologies.service";
import listTechnologiesService from "./technologies/listTechlonogies.service";

/* Profile */
import listUserProfileByIdService from "./profile/listUserProfileById.service";
import listOngByIdService from "./profile/listOngProfileById.service";

export {
  createUserService,
  deleteUserService,
  listUsersService,
  updateUserService,
  createNewsService,
  listNewsService,
  deleteNewsService,
  updateNewsService,
  listNewsByIdService,
  createOngService,
  deleteOngService,
  listOngService,
  updateOngService,
  loginService,
  insertTechnologiesService,
  listAllTasksService,
  updateTaskService,
  deleteTaskService,
  createTaskService,
  listTechnologiesService,
  listUserProfileByIdService,
  listOngByIdService,
  getTechnologieService,
};
