import { DocumentType } from "@typegoose/typegoose";
import { createPnach, createSeed } from "@valaxor/kh2fm-randomizer";
import { SeedSchema } from "./model";

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
