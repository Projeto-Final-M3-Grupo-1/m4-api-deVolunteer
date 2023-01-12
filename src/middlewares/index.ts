import errorMiddleware from "./error.middleware";
import validateSchemaMiddleware from "./validate/validateSchema.middleware";
import ensureAuthMiddleware from "./users/ensureAuth.middleware";
import isAdminMiddleware from "./users/isAdmin.middleware";
import isIdValidMiddleware from "./news/isIdValid.middleware";

export {
	errorMiddleware,
	validateSchemaMiddleware,
	ensureAuthMiddleware,
	isAdminMiddleware,
	isIdValidMiddleware,
};
