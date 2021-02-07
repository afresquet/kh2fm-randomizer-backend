declare namespace Express {
	//@ts-ignore: Statements are not allowed in ambient contexts.
	import("../../db/models/User");
	//@ts-ignore: Import declarations in a namespace cannot reference a module.
	import { UserSchema } from "../../db/models/User";

	export interface User extends UserSchema {}
}
