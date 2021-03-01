import { Resolvers } from "../../../types/Resolvers";
import { SeedCreateResolver } from "./Create";
import { SeedQueryResolver } from "./Query";

export const SeedResolvers: Resolvers = [SeedQueryResolver, SeedCreateResolver];
