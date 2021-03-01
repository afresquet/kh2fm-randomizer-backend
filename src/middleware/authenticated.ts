import { RequestHandler } from "express";
import { KeyService } from "../db/models/Key";

export const autenticated: RequestHandler = (req, res, next) => {
	if (req.user) {
		next();

		return;
	}

	res.status(401).send("Unauthorized");
};

export const apiKeyAuthenticated: RequestHandler = async (req, res, next) => {
	try {
		const user = await KeyService.validate(req.headers.authorization);

		req.user = user;

		next();
	} catch (error) {
		next(error);
	}
};
