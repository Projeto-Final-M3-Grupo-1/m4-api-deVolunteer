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

/* Ongs */
import createOngService from "./ongs/createOng.service";
import deleteOngService from "./ongs/deleteOng.service";
import listOngService from "./ongs/listOng.service";
import updateOngService from "./ongs/updateOng.service";

/* Login */
import loginService from "./login/login.service";

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
};
