import mongoose from "mongoose";

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

export const connectDB = () => {
	return mongoose.connect(process.env.MONGO_DB_URL!, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};
