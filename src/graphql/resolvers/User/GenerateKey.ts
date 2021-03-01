import { Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { KeyService } from "../../../db/models/Key";
import { createKeyFile } from "../../../helpers/createKeyFile";
import { GraphQLContext } from "../../../types/GraphQLContext";
import { authenticated } from "../../middleware/authenticated";

@Resolver()
export class UserGenerateKeyResolver {
	@Mutation(() => String, { nullable: true })
	@UseMiddleware(authenticated)
	async generateKey(@Ctx() { user }: GraphQLContext) {
		const token = await KeyService.generate(user!.id);

		const file = createKeyFile(
			token,
			`http://localhost:${process.env.PORT}/api/emulator/seed`
		);

		return file;
	}
}
