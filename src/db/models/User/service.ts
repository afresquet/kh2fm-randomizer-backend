import { User } from "./model";

export const find = (id: string) => {
	return User.findById(id).populate("seed");
};
