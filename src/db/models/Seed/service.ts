import { DocumentType } from "@typegoose/typegoose";
import { createPnach, createSeed } from "@valaxor/kh2fm-randomizer";
import { UserSchema } from "../User";
import { Configuration } from "./Configuration";
import { Seed, SeedSchema } from "./model";

export const create = async (
	name: string,
	configuration: Configuration,
	user: DocumentType<UserSchema>
) => {
	const seed = await Seed.create({
		user: user.id,
		name,
		configuration,
	});

	user.seed = seed.id;

	await user.save();

	return seed;
};

export const generateFile = ({
	name,
	configuration: { settings, worlds, include, gameMode, experimental },
}: DocumentType<SeedSchema>) => {
	const configuration = {
		name,
		settings,
		worlds,
		include,
		gameMode,
		experimental,
	};

	const seed = createSeed(configuration);

	return createPnach(seed, configuration);
};
