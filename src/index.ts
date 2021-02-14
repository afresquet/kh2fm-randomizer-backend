import "dotenv/config";
import "reflect-metadata";
import { app } from "./app";
import { connectDB } from "./db/configure";
import { createApolloServer } from "./graphql";

(async () => {
	await connectDB();

	const port = process.env.PORT || 5000;

	const apolloServer = await createApolloServer();

	apolloServer.applyMiddleware({ app });

	app.listen(port, () => {
		console.log(`Server listening on port ${port}...`);
	});
})();
