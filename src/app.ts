import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import cors from "cors";
import express from "express";
import passport from "passport";
import "./passport/configure";
import { routes } from "./routes";

const app = express();

app.use(
	cors({
		origin: [process.env.CORS_CLIENT_ORIGIN],
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	})
);

app.use(express.json());

app.use(cookieParser());
app.use(
	cookieSession({
		maxAge: 24 * 60 * 60 * 1000,
		keys: [process.env.COOKIE_SESSION_KEY],
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

export { app };
