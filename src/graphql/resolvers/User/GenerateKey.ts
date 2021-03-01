import { networkInterfaces } from "os";
import { Ctx, Mutation, Resolver, UseMiddleware } from "type-graphql";
import { KeyService } from "../../../db/models/Key";
import { createKeyFile } from "../../../helpers/createKeyFile";
import { GraphQLContext } from "../../../types/GraphQLContext";
import { authenticated } from "../../middleware/authenticated";

const url = networkInterfaces()["en0"]!.find(x => x.family === "IPv4")!.address;

@Resolver()
export class UserGenerateKeyResolver {
	@Mutation(() => String, { nullable: true })
	@UseMiddleware(authenticated)
	async generateKey(@Ctx() { user }: GraphQLContext) {
		const token = await KeyService.generate(user!.id);

		const file = createKeyFile(
			token,
			`http://${url}:${process.env.PORT}/api/emulator/seed`
		);

		return file;
	}
}
