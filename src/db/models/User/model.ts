import { getModelForClass, prop, Ref } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Field, ID, InterfaceType, ObjectType } from "type-graphql";
import { SeedSchema } from "../Seed";

@InterfaceType()
class Provider {
	@Field(() => ID)
	@prop({ required: true })
	id: string;

	@Field()
	@prop({ required: true })
	username: string;

	@Field()
	@prop({ required: true })
	email: string;

	@Field()
	@prop({ required: true })
	accessToken: string;
}

@ObjectType({ implements: Provider })
class PatreonProvider extends Provider {}
@ObjectType({ implements: Provider })
class TwitchProvider extends Provider {}
@ObjectType({ implements: Provider })
class DiscordProvider extends Provider {}

@ObjectType()
class Providers {
	@Field(() => PatreonProvider, { nullable: true })
	@prop({ _id: false })
	patreon?: PatreonProvider;

	@Field(() => TwitchProvider, { nullable: true })
	@prop({ _id: false })
	twitch?: TwitchProvider;

	@Field(() => DiscordProvider, { nullable: true })
	@prop({ _id: false })
	discord?: DiscordProvider;
}

@ObjectType()
class User extends TimeStamps {
	@Field(() => ID)
	id: string;

	@Field(() => Providers)
	@prop({ _id: false })
	providers: Providers;

	@Field(() => SeedSchema, { nullable: true })
	@prop({ ref: "Seed", default: null })
	seed?: Ref<SeedSchema>;
}

const Model = getModelForClass(User, { schemaOptions: { timestamps: true } });

export { Model as User };
export { User as UserSchema };
