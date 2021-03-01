import express from "express";
import { emulatorRouter } from "./emulator";
import { userRouter } from "./user";

const router = express.Router();

router.use("/user", userRouter);
router.use("/emulator", emulatorRouter);

export { router as apiRouter };
