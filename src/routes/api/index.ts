import express from "express";
import { userRouter } from "./user";

const router = express.Router();

router.use("/user", userRouter);

export { router as apiRouter };
