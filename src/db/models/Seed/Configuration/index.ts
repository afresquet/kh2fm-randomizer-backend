import { prop } from "@typegoose/typegoose";
import { Configuration as Config } from "@valaxor/kh2fm-randomizer/dist/types";
import { GameMode as GameModeEnum } from "@valaxor/kh2fm-randomizer/dist/types/enums";
import { Field, InputType, ObjectType } from "type-graphql";
import { Experimental } from "./Experimental";
import { GoAModSettings } from "./GoAModSettings";
import { Include } from "./Include";
import { Settings } from "./Settings";
import { Worlds } from "./Worlds";

type GM = Config["gameMode"];

@InputType("GameModeInput")
@ObjectType("GameModeType")
class GameMode implements GM {
	@Field(() => GameModeEnum)
	@prop()
	mode: GameModeEnum;

	@Field(() => GoAModSettings)
	@prop({ _id: false })
	goa: GoAModSettings;
}

@InputType("ConfigurationInput")
@ObjectType("ConfigurationType")
export class Configuration implements Omit<Config, "name"> {
	@Field(() => Settings)
	@prop({ _id: false })
	settings: Settings;

	@Field(() => Worlds)
	@prop({ _id: false })
	worlds: Worlds;

	@Field(() => Include)
	@prop({ _id: false })
	include: Include;

	@Field(() => GameMode)
	@prop({ _id: false })
	gameMode: GameMode;

	@Field(() => Experimental)
	@prop({ _id: false })
	experimental: Experimental;
}
