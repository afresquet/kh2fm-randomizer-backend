import { DocumentType } from "@typegoose/typegoose";
import express from "express";
import { SeedSchema, SeedService } from "../../db/models/Seed";
import { apiKeyAuthenticated } from "../../middleware/authenticated";

const router = express.Router();

router.use(apiKeyAuthenticated);

router.get("/seed", (req, res) => {
	if (!req.user!.seed) {
		res.sendStatus(404);

		return;
	}

	const file = SeedService.generateFile(
		req.user!.seed as DocumentType<SeedSchema>
	);

	res.send(file);
});

export { router as emulatorRouter };
