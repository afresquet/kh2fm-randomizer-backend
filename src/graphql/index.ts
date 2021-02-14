import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { resolvers } from "./resolvers";

export const createApolloServer = async () => {
	return new ApolloServer({
		schema: await buildSchema({ resolvers, validate: false }),
		context: ({ req, res }) => ({ req, res }),
	});
};
