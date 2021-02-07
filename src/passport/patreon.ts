import {
	Profile,
	Strategy as PatreonStrategy,
	VerifyCallback,
} from "@oauth-everything/passport-patreon";
import { User, UserSchema } from "../db/models/User";

type VerifyFunction = (
	accessToken: string,
	refreshToken: string,
	profile: Profile,
	done: VerifyCallback<UserSchema>
) => Promise<void>;

export const patreonStrategy = new PatreonStrategy(
	{
		clientID: process.env.PATREON_CLIENT_ID!,
		clientSecret: process.env.PATREON_CLIENT_SECRET!,
		callbackURL: "/auth/patreon/redirect",
		scope: ["identity", "identity[email]", "identity.memberships"],
	},
	(async (accessToken, refreshToken, profile, done) => {
		const user = await User.findOne({ "providers.patreon.id": profile.id });

		if (user) {
			done(null, user);

			return;
		}

		const newUser = await User.create({
			providers: {
				patreon: {
					id: profile.id,
					username: profile.username!,
					email: profile.emails![0].value,
					accessToken,
				},
			},
		});

		done(null, newUser);
	}) as VerifyFunction
);
