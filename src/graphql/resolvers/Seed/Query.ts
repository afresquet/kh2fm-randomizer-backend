import { Arg, Query, Resolver } from "type-graphql";
import { Seed, SeedSchema } from "../../../db/models/Seed";

@Resolver()
export class SeedQueryResolver {
	@Query(() => SeedSchema)
	seed(@Arg("id") id: string) {
		return Seed.findById(id);
	}
}
