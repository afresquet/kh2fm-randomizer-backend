import {
	GameMode,
	Leveling,
	Multiplier,
	RandomizingAction,
	Toggle,
} from "@valaxor/kh2fm-randomizer/dist/types/enums";
import mongoose from "mongoose";
import { registerEnumType } from "type-graphql";

mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

export const connectDB = () => {
	return mongoose.connect(process.env.MONGO_DB_URL!, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});
};

registerEnumType(GameMode, { name: "GameMode" });
registerEnumType(RandomizingAction, { name: "RandomizingAction" });
registerEnumType(Leveling, { name: "Leveling" });
registerEnumType(Toggle, { name: "Toggle" });
registerEnumType(Multiplier, { name: "Multiplier" });
