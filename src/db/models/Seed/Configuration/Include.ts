import { prop } from "@typegoose/typegoose";
import { Configuration } from "@valaxor/kh2fm-randomizer/dist/types";
import {
	RandomizingAction,
	Toggle,
} from "@valaxor/kh2fm-randomizer/dist/types/enums";
import { Field, ObjectType } from "type-graphql";

type T = Configuration["include"];

@ObjectType()
export class Include implements T {
	@Field(() => RandomizingAction)
	@prop()
	keybladeAbilities: RandomizingAction;

	@Field(() => Toggle)
	@prop()
	donaldAbilities: Toggle;

	@Field(() => Toggle)
	@prop()
	goofyAbilities: Toggle;

	@Field(() => RandomizingAction)
	@prop()
	absentSilhouettes: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	dataOrganizationXIII: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	olympusCups: RandomizingAction;

	@Field(() => Toggle)
	@prop()
	hadesCup: Toggle;

	@Field(() => Toggle)
	@prop()
	terra: Toggle;

	@Field(() => Toggle)
	@prop()
	sephiroth: Toggle;

	@Field(() => Toggle)
	@prop()
	ultimaWeapon: Toggle;

	@Field(() => Toggle)
	@prop()
	finalForm: Toggle;

	@Field(() => RandomizingAction)
	@prop()
	formAbilities: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	growthAbilities: RandomizingAction;

	@Field(() => Toggle)
	@prop()
	maxGrowthAbilities: Toggle;

	@Field(() => Toggle)
	@prop()
	synthItems: Toggle;
}
