import passport from "passport";
import { UserService } from "../db/models/User";
import { discordStrategy } from "./discord";
import { patreonStrategy } from "./patreon";
import { twitchStrategy } from "./twitch";

passport.serializeUser<string>((user, done) => {
	done(null, user.id);
});

passport.deserializeUser<string>(async (id, done) => {
	const user = await UserService.find(id);

	if (!user) {
		done(new Error("User doesn't exist"));

		return;
	}

	done(null, user);
});

// Strategies
passport.use(patreonStrategy);
passport.use(twitchStrategy);
passport.use(discordStrategy);
