import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();
router.post("/", UserController.createUser);
router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getSingleUserById);
router.patch("/:id", UserController.updateUserById);
router.delete("/:id", UserController.deleteUserById);

export const UserRoutes = router;
