import { Resolvers } from "../../../types/Resolvers";
import { UserGenerateKeyResolver } from "./GenerateKey";
import { UserQueryResolver } from "./Query";

export const UserResolvers: Resolvers = [
	UserQueryResolver,
	UserGenerateKeyResolver,
];
