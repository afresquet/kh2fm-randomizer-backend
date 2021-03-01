import { Arg, Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { SeedSchema, SeedService } from "../../../db/models/Seed";
import { Configuration } from "../../../db/models/Seed/Configuration";
import { GraphQLContext } from "../../../types/GraphQLContext";
import { authenticated } from "../../middleware/authenticated";

@Resolver()
export class SeedCreateResolver {
	@Mutation(() => SeedSchema)
	@UseMiddleware(authenticated)
	async createSeed(
		@Arg("name") name: string,
		@Arg("configuration", () => Configuration) configuration: Configuration,
		@Ctx() { user }: GraphQLContext
	) {
		return SeedService.create(name, configuration, user!);
	}
}
