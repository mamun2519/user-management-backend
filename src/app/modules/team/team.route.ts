import express from "express";
import { TeamController } from "./team.controller";
import auth from "../../middlewares/auth";

const router = express.Router();
router.post("/", TeamController.createTeam);
router.get("/my-team", auth(), TeamController.myTeam);
router.delete("/", TeamController.deleteTeam);
export const TeamRouters = router;
