import { User } from "./model";

const find = (id: string) => {
	return User.findById(id).populate("seed");
};

export const UserService = {
	find,
};
