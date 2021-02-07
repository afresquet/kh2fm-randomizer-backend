import "dotenv/config";
import { app } from "./app";
import { connectDB } from "./db/configure";

(async () => {
	await connectDB();

	const port = process.env.PORT || 5000;

	app.listen(port, () => {
		console.log(`Server listening on port ${port}...`);
	});
})();
