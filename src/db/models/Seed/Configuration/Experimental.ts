import { prop } from "@typegoose/typegoose";
import { Configuration } from "@valaxor/kh2fm-randomizer/dist/types";
import { Toggle } from "@valaxor/kh2fm-randomizer/dist/types/enums";
import { Field, InputType, ObjectType } from "type-graphql";

type T = Configuration["experimental"];

@InputType("ExperimentalInput")
@ObjectType("ExperimentalType")
export class Experimental implements T {
	@Field(() => Toggle)
	@prop()
	enemies: Toggle;

	@Field(() => Toggle)
	@prop()
	bosses: Toggle;

	@Field(() => Toggle)
	@prop()
	superbossRetry: Toggle;
}
