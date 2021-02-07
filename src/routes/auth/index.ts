import express from "express";
import { discordAuthRouter } from "./discord";

const router = express.Router();

router.use("/auth/discord", discordAuthRouter);

export { router as authRouter };
