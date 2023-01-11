/* Users */
import listUserController from "./users/listUsers.controller";
import createUserController from "./users/createUser.controller";
import deleteUserController from "./users/deleteUser.controller";
import updateUserController from "./users/updateUser.controller";

/* News */
import createNewsController from "./news/createNews.controller";
import listNewsController from "./news/listNews.controller";
import deleteNewsController from "./news/deleteNews.controller";
import updateNewsController from "./news/updateNews.controller";
import listNewsByIdController from "./news/listNewsById.controller";

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
};
