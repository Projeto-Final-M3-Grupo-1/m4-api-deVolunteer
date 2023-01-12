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

/* Ongs */
import createOngController from "./ongs/createOng.controller";
import deleteOngController from "./ongs/deleteOng.controller";
import listOngController from "./ongs/listOng.controller";
import updateOngController from "./ongs/updateOng.controller";

/* Login */
import loginController from "./login/login.controller";

/* Technologies */
import insertTechnologiesController from "./technologies/insertTechnologies.controller";

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
};
