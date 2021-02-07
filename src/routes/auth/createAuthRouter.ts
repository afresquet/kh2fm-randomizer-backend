import express from "express";
import passport from "passport";
import { Provider } from "../../types/Provider";

export const createAuthRouter = (provider: Provider) => {
	const router = express.Router();

	router.get("/", passport.authenticate(provider));

	router.get("/redirect", passport.authenticate(provider), (req, res) => {
		res.redirect("http://localhost:3000/");
	});

	return router;
};
