import { Strategy as TwitchStrategy } from "passport-twitch-strategy";
import { Provider } from "../types/Provider";
import { createVerifyFunction } from "./createVerifyFunction";

interface Profile {
	id: string;
	login: string;
	type: string;
	broadcaster_type: string;
	description: string;
	profile_image_url: string;
	offline_image_url: string;
	view_count: number;
	email: string;
	created_at: string;
	provider: string;
	displayName: string;
}

export const twitchStrategy = new TwitchStrategy(
	{
		clientID: process.env.TWITCH_CLIENT_ID,
		clientSecret: process.env.TWITCH_CLIENT_SECRET,
		callbackURL: "/auth/twitch/redirect",
		scope: "user_read",
	},
	createVerifyFunction<Profile>(
		Provider.TWITCH,
		(accessToken, refreshToken, profile) => {
			return {
				id: profile.id,
				username: profile.displayName,
				email: profile.email,
				accessToken,
			};
		}
	)
);
