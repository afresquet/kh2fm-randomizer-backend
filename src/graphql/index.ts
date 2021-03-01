import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { GraphQLContext } from "../types/GraphQLContext";
import { resolvers } from "./resolvers";

export const createApolloServer = async () => {
	return new ApolloServer({
		schema: await buildSchema({ resolvers, validate: false }),
		context: ({ req, res }) => {
			const context: GraphQLContext = { req, res, user: req.user };

			return context;
		},
	});
};
