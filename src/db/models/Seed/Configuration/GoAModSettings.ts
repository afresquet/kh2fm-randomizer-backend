import { prop } from "@typegoose/typegoose";
import { Configuration } from "@valaxor/kh2fm-randomizer/dist/types";
import { Toggle } from "@valaxor/kh2fm-randomizer/dist/types/enums";
import { Field, InputType, ObjectType } from "type-graphql";

type T = Configuration["gameMode"]["goa"];

@InputType("GoAModSettingsInput")
@ObjectType("GoAModSettingsType")
export class GoAModSettings implements T {
	@Field(() => Toggle)
	@prop()
	promiseCharm: Toggle;

	@Field(() => Toggle)
	@prop()
	goMode: Toggle;

	@Field(() => Toggle)
	@prop()
	shorterDay5: Toggle;

	@Field(() => Toggle)
	@prop()
	fasterOogie: Toggle;

	@Field(() => Toggle)
	@prop()
	fasterPresents: Toggle;

	@Field(() => Toggle)
	@prop()
	earlyLionDash: Toggle;

	@Field(() => Toggle)
	@prop()
	fastHyenasTwo: Toggle;

	@Field(() => Toggle)
	@prop()
	skipDragon: Toggle;

	@Field(() => Toggle)
	@prop()
	fieldCamera: Toggle;

	@Field(() => Toggle)
	@prop()
	cameraUpDown: Toggle;

	@Field(() => Toggle)
	@prop()
	cameraLeftRight: Toggle;

	@Field(() => Toggle)
	@prop()
	summonEffects: Toggle;
}
