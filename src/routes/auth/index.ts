import express from "express";
import { Provider } from "../../types/Provider";
import { createAuthRouter } from "./createAuthRouter";

const router = express.Router();

router.use("/patreon", createAuthRouter(Provider.PATREON));
router.use("/twitch", createAuthRouter(Provider.TWITCH));
router.use("/discord", createAuthRouter(Provider.DISCORD));

router.get("/logout", (req, res) => {
	req.logout();
	res.redirect("http://localhost:3000/");
});

export { router as authRouter };
