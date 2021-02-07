import { Strategy as DiscordStrategy } from "passport-discord";
import { User } from "../db/models/User";

export const discordStrategy = new DiscordStrategy(
	{
		clientID: process.env.DISCORD_CLIENT_ID!,
		clientSecret: process.env.DISCORD_CLIENT_SECRET!,
		callbackURL: "/auth/discord/redirect",
		scope: ["identify", "email"],
	},
	async (accessToken, refreshToken, profile, done) => {
		const user = await User.findOne({ "providers.discord.id": profile.id });

		if (user) {
			done(null, user);

			return;
		}

		const newUser = await User.create({
			providers: {
				discord: {
					id: profile.id,
					username: profile.username,
					email: profile.email!,
					accessToken,
				},
			},
		});

		done(null, newUser);
	}
);
