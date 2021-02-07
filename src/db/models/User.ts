import { getModelForClass, prop } from "@typegoose/typegoose";

class Provider {
	@prop({ required: true })
	id: string;

	@prop({ required: true })
	username: string;

	@prop({ required: true })
	email: string;

	@prop({ required: true })
	accessToken: string;
}

class PatreonProvider extends Provider {}
class TwitchProvider extends Provider {}
class DiscordProvider extends Provider {}

class Providers {
	@prop({ _id: false })
	patreon?: PatreonProvider;

	@prop({ _id: false })
	twitch?: TwitchProvider;

	@prop({ _id: false })
	discord?: DiscordProvider;
}

class User {
	id: string;

	@prop({ _id: false })
	providers: Providers;
}

const Model = getModelForClass(User);

export { Model as User };
export { User as UserSchema };
