export type VerifyFunction<Profile, VerifyCallback> = (
	accessToken: string,
	refreshToken: string,
	profile: Profile,
	done: VerifyCallback
) => Promise<void>;
