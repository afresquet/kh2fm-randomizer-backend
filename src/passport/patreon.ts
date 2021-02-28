import {
	Profile,
	Strategy as PatreonStrategy,
} from "@oauth-everything/passport-patreon";
import { Provider } from "../types/Provider";
import { createVerifyFunction } from "./createVerifyFunction";

export const patreonStrategy = new PatreonStrategy(
	{
		clientID: process.env.PATREON_CLIENT_ID,
		clientSecret: process.env.PATREON_CLIENT_SECRET,
		callbackURL: "/auth/patreon/redirect",
		scope: ["identity", "identity[email]", "identity.memberships"],
		passReqToCallback: true,
	},
	createVerifyFunction<Profile>(
		Provider.PATREON,
		(accessToken, refreshToken, profile) => {
			return {
				id: profile.id,
				username: profile.username!,
				email: profile.emails![0].value,
				accessToken,
			};
		}
	)
);
