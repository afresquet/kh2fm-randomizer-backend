import { Resolvers } from "../../types/Resolvers";
import { UserResolvers } from "./User";

export const resolvers: Resolvers = [...UserResolvers];
