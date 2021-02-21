import { prop } from "@typegoose/typegoose";
import { Configuration } from "@valaxor/kh2fm-randomizer/dist/types";
import { RandomizingAction } from "@valaxor/kh2fm-randomizer/dist/types/enums";
import { Field, ObjectType } from "type-graphql";

type T = Configuration["worlds"];

@ObjectType()
export class Worlds implements T {
	@Field(() => RandomizingAction)
	@prop()
	simulatedTwilightTown: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	twilightTown: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	hollowBastion: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	cavernOfRemembrance: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	beastsCastle: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	olympus: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	agrabah: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	landOfDragons: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	pooh: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	atlantica: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	prideLands: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	disneyCastle: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	timelessRiver: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	halloweenTown: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	portRoyal: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	spaceParanoids: RandomizingAction;

	@Field(() => RandomizingAction)
	@prop()
	twtnw: RandomizingAction;
}
