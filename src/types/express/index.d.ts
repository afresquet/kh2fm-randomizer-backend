declare namespace Express {
	//@ts-ignore: Statements are not allowed in ambient contexts.
	import("@typegoose/typegoose");
	//@ts-ignore: Import declarations in a namespace cannot reference a module.
	import { DocumentType } from "@typegoose/typegoose";
	//@ts-ignore: Statements are not allowed in ambient contexts.
	import("../../db/models/User");
	//@ts-ignore: Import declarations in a namespace cannot reference a module.
	import { UserSchema } from "../../db/models/User";

	export interface User extends DocumentType<UserSchema> {}
}
