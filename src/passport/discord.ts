import { Profile, Strategy as DiscordStrategy } from "passport-discord";
import { Provider } from "../types/Provider";
import { createVerifyFunction } from "./createVerifyFunction";

export const discordStrategy = new DiscordStrategy(
	{
		clientID: process.env.DISCORD_CLIENT_ID!,
		clientSecret: process.env.DISCORD_CLIENT_SECRET!,
		callbackURL: "/auth/discord/redirect",
		scope: ["identify", "email"],
		passReqToCallback: true,
	},
	createVerifyFunction<Profile>(
		Provider.DISCORD,
		(accessToken, refreshToken, profile) => {
			return {
				id: profile.id,
				username: profile.username,
				email: profile.email!,
				accessToken,
			};
		}
	)
);
