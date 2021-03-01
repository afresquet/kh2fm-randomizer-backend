import { MiddlewareFn } from "type-graphql";
import { GraphQLContext } from "../../types/GraphQLContext";

export const authenticated: MiddlewareFn<GraphQLContext> = async (
	{ context: { user } },
	next
) => {
	if (!user) {
		throw new Error("forbidden");
	}

	return next();
};
