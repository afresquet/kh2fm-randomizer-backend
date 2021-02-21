import { prop } from "@typegoose/typegoose";
import { Configuration } from "@valaxor/kh2fm-randomizer/dist/types";
import {
	GameMode,
	Leveling,
	Multiplier,
	RandomizingAction,
	Toggle,
} from "@valaxor/kh2fm-randomizer/dist/types/enums";
import { Field, ObjectType } from "type-graphql";

type T = Configuration["settings"];

@ObjectType()
export class Settings implements T {
	@Field(() => GameMode)
	@prop()
	gameMode: GameMode;

	@Field(() => Leveling)
	@prop()
	leveling: Leveling;

	@Field(() => RandomizingAction)
	@prop()
	abilities: RandomizingAction;

	@Field(() => Toggle)
	@prop()
	stats: Toggle;

	@Field(() => RandomizingAction)
	@prop()
	keybladeStats: RandomizingAction;

	@Field(() => Toggle)
	@prop()
	bonusModifiers: Toggle;

	@Field(() => Toggle)
	@prop()
	criticalMode: Toggle;

	@Field(() => RandomizingAction)
	@prop()
	reportDepth: RandomizingAction;

	@Field(() => Multiplier)
	@prop()
	expMultiplier: Multiplier;

	@Field(() => Multiplier)
	@prop()
	valorEXP: Multiplier;

	@Field(() => Multiplier)
	@prop()
	wisdomEXP: Multiplier;

	@Field(() => Multiplier)
	@prop()
	limitEXP: Multiplier;

	@Field(() => Multiplier)
	@prop()
	masterEXP: Multiplier;

	@Field(() => Multiplier)
	@prop()
	finalEXP: Multiplier;
}
