import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Field, ID, ObjectType } from "type-graphql";
import packageJson from "../../../../package.json";
import { UserSchema } from "../User";
import { Configuration } from "./Configuration";

const currentVersion = packageJson.dependencies[
	"@valaxor/kh2fm-randomizer"
].substring(1);

@ObjectType()
class Seed extends TimeStamps {
	@Field(() => ID)
	id: string;

	@Field()
	@prop()
	name: string;

	@Field()
	@prop({ default: currentVersion })
	version?: string;

	@Field(() => Configuration)
	@prop({ _id: false })
	configuration: Configuration;

	@Field(() => UserSchema)
	@prop({ ref: "User" })
	user: Ref<UserSchema>;
}

const model = getModelForClass(Seed, { schemaOptions: { timestamps: true } });

export { model as Seed };
export { Seed as SeedSchema };
