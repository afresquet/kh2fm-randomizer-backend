import express from "express";
import { createAuthRouter } from "./createAuthRouter";

const router = express.Router();

router.use("/patreon", createAuthRouter("patreon"));
router.use("/twitch", createAuthRouter("twitch"));
router.use("/discord", createAuthRouter("discord"));

export { router as authRouter };
