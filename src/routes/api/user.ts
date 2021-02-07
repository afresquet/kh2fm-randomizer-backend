import express from "express";
import { autenticated } from "../../middleware/authenticated";

const router = express.Router();

router.use("/", autenticated, (req, res) => {
	res.json(req.user);
});

export { router as userRouter };
