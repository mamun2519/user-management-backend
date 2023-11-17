import express from "express";
import { AuthController } from "./auth.controller";
const router = express.Router();
router.post("/sing-up", AuthController.signUpUser);
export const AuthRouter = router;
