import express from "express";
import passport from "passport";

export const createAuthRouter = (provider: string) => {
	const router = express.Router();

	router.get("/", passport.authenticate(provider));

	router.get("/redirect", passport.authenticate(provider), (req, res) => {
		res.redirect("http://localhost:3000/");
	});

	return router;
};
