import { Resolvers } from "../../types/Resolvers";
import { SeedResolvers } from "./Seed";
import { UserResolvers } from "./User";

export const resolvers: Resolvers = [...UserResolvers, ...SeedResolvers];
