import { VerifyCallback } from "@oauth-everything/passport-patreon";
import { Strategy as TwitchStrategy } from "passport-twitch-strategy";
import { User, UserSchema } from "../db/models/User";
import { VerifyFunction } from "../types/VerifyFunction";

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
		clientID: process.env.TWITCH_CLIENT_ID!,
		clientSecret: process.env.TWITCH_CLIENT_SECRET!,
		callbackURL: "/auth/twitch/redirect",
		scope: "user_read",
	},
	(async (accessToken, refreshToken, profile, done) => {
		const user = await User.findOne({ "providers.twitch.id": profile.id });

		if (user) {
			done(null, user);

			return;
		}

		const newUser = await User.create({
			providers: {
				twitch: {
					id: profile.id,
					username: profile.displayName,
					email: profile.email,
					accessToken,
				},
			},
		});

		done(null, newUser);
	}) as VerifyFunction<Profile, VerifyCallback<UserSchema>>
);
