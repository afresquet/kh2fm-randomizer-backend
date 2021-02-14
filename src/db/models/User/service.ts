import { User } from "./model";

const find = (id: string) => {
	return User.findById(id);
};

export class UserService {
	static find = find;
}
