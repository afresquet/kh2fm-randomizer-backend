import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { UserSchema } from "../User";

class Key extends TimeStamps {
	@prop({ ref: "User" })
	user: Ref<UserSchema>;

	@prop({ default: true })
	valid?: boolean;
}

const Model = getModelForClass(Key, { schemaOptions: { timestamps: true } });

export { Model as Key };
