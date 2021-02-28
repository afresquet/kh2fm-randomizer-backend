import { RequestHandler } from "express";
import { verify } from "jsonwebtoken";
import { Key } from "../db/models/Key";
import { UserService } from "../db/models/User";

export const autenticated: RequestHandler = (req, res, next) => {
	if (req.user) {
		next();

		return;
	}

	res.status(401).send("Unauthorized");
};

export const apiKeyAuthenticated: RequestHandler = async (req, res, next) => {
	try {
		if (!req.headers.authorization) {
			throw new Error("missing authorization header");
		}

		const token = req.headers.authorization.split(" ")[1];

		const key = await Key.findOne({ token });

		if (!key || !key.valid) {
			throw new Error("invalid token");
		}

		const payload = verify(token!, process.env.JWT_SECRET!) as { user: string };

		const user = await UserService.find(payload.user);

		if (!user) {
			throw new Error("user doesn't exist");
		}

		req.user = user;

		next();
	} catch (error) {
		next(error);
	}
};
