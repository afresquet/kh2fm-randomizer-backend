import { sign, verify } from "jsonwebtoken";
import { JWTPayload } from "../../../types/JWTPayload";
import { User, UserService } from "../User";
import { Key } from "./model";

export const generate = async (userId: string) => {
	const user = await User.exists({ _id: userId });

	if (!user) {
		throw new Error("user doesn't exist");
	}

	const key = await Key.create({ user: userId });

	const payload: JWTPayload = { id: key.id, user: userId };

	return sign(payload, process.env.JWT_SECRET);
};

export const find = (id: string) => {
	return Key.findById(id);
};

const regex = /^Bearer (.+)/;
export const validate = async (authorization?: string) => {
	if (!authorization || !regex.test(authorization)) {
		throw new Error("invalid token");
	}

	const token = regex.exec(authorization)![1];

	const payload = verify(token, process.env.JWT_SECRET) as JWTPayload;

	const [user, key] = await Promise.all([
		UserService.find(payload.user),
		find(payload.id),
	]);

	if (!user || !key?.valid) {
		throw new Error("invalid token");
	}

	return user;
};
