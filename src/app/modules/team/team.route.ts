import express from "express";

const router = express.Router();
router.post("/");
router.get("/");
router.get("/my-team");
router.delete("/");
export const AuthRouter = router;
