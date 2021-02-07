import { RequestHandler } from "express";

export const autenticated: RequestHandler = (req, res, next) => {
	if (req.user) {
		next();

		return;
	}

	res.status(401).send("Unauthorized");
};
