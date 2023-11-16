import express from "express";
import { UserRoutes } from "../modules/user/user.route";
const router = express.Router();

// all module route is here
const AllModuleRoutes = [{ path: "/user", router: UserRoutes }];

AllModuleRoutes.forEach((route) => router.use(route.path, route.router));

export const RootRoutes = router;
