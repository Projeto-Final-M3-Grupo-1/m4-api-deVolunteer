/* Users */
import createUserService from "./users/createUser.service";
import deleteUserService from "./users/deleteUser.service";
import listUsersService from "./users/listUsers.service";
import updateUserService from "./users/updateUser.service";

/* News */
import createNewsService from "./news/createNews.service";
import listNewsService from "./news/listNews.service";
import deleteNewsService from "./news/deleteNews.service";
import updateNewsService from "./news/updateNews.service";
import listNewsByIdService from "./news/listNewsById.service";

/* Techs */

/* Tasks */
import createTaskService from "./tasks/createTask.service";


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
	createTaskService
};
