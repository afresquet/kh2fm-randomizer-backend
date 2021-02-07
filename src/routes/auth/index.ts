import express from "express";
import { Provider } from "../../types/Provider";
import { createAuthRouter } from "./createAuthRouter";

const router = express.Router();

router.use("/patreon", createAuthRouter(Provider.PATREON));
router.use("/twitch", createAuthRouter(Provider.TWITCH));
router.use("/discord", createAuthRouter(Provider.DISCORD));

export { router as authRouter };
