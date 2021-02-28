import { getModelForClass, prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";

class Key extends TimeStamps {
	@prop()
	token: string;

	@prop({ default: true })
	valid?: boolean;
}

const Model = getModelForClass(Key, { schemaOptions: { timestamps: true } });

export { Model as Key };
