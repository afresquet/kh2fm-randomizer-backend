import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Configuration } from "@valaxor/kh2fm-randomizer/dist/types";
import packageJson from "../../../../package.json";
import { UserSchema } from "../User";

class Seed extends TimeStamps {
	id: string;

	@prop()
	name: string;

	@prop({
		default: packageJson.dependencies["@valaxor/kh2fm-randomizer"].substring(1),
	})
	version?: string;

	@prop()
	configuration: Omit<Configuration, "name">;

	@prop({ ref: "User" })
	user: Ref<UserSchema>;
}

const model = getModelForClass(Seed, { schemaOptions: { timestamps: true } });

export { model as Seed };
export { Seed as SeedSchema };
