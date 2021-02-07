import { User } from "../db/models/User";
import { Provider } from "../types/Provider";

export const createVerifyFunction = <Profile extends { id: string }>(
	provider: Provider,
	createProviderData: (
		accessToken: string,
		refreshToken: string,
		profile: Profile
	) => Express.User["providers"][typeof provider]
) => {
	return async (
		req: Express.Request,
		accessToken: string,
		refreshToken: string,
		profile: Profile,
		done: (err?: Error | null, user?: Express.User, info?: object) => void
	) => {
		// Creates provider data with a callback
		const providerData = createProviderData(accessToken, refreshToken, profile);

		if (req.user) {
			const user = req.user;

			if (user.providers[provider]) {
				if (user.providers[provider]!.id !== profile.id) {
					// Prevent overriding if there is a provider already bound
					// and it doesn't match the profile's account
					done(
						new Error(
							`A different provider "${provider}" is already bound to the user's account!`
						)
					);

					return;
				}
			} else {
				// If there isn't provider data bind it to the user
				user.providers[provider] = providerData;

				await user.save();
			}

			done(null, user);

			return;
		}

		const user = await User.findOne({
			[`providers.${provider}.id`]: profile.id,
		});

		if (user) {
			done(null, user);

			return;
		}

		const newUser = await User.create({
			providers: { [provider]: providerData },
		});

		done(null, newUser);
	};
};
