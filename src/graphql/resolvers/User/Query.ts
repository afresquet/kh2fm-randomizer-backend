import { Ctx, Query, Resolver } from "type-graphql";
import { UserSchema } from "../../../db/models/User";
import { GraphQLContext } from "../../../types/GraphQLContext";

@Resolver()
export class UserQueryResolver {
	@Query(() => UserSchema, { nullable: true })
	user(@Ctx() context: GraphQLContext) {
		return context.req.user ?? null;
	}
}
