import { getModelForClass, prop } from "@typegoose/typegoose";
import { TimeStamps } from "@typegoose/typegoose/lib/defaultClasses";
import { Field, ID, InterfaceType, ObjectType } from "type-graphql";

@InterfaceType()
class Provider {
	@Field(() => ID)
	@prop({ required: true })
	id: string;

	@Field(() => String)
	@prop({ required: true })
	username: string;

	@Field(() => String)
	@prop({ required: true })
	email: string;

	@Field(() => String)
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
	@Field(() => PatreonProvider)
	@prop({ _id: false })
	patreon?: PatreonProvider;

	@Field(() => TwitchProvider)
	@prop({ _id: false })
	twitch?: TwitchProvider;

	@Field(() => DiscordProvider)
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
}

const Model = getModelForClass(User, { schemaOptions: { timestamps: true } });

export { Model as User };
export { User as UserSchema };
