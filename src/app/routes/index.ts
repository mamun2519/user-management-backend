import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { TeamRouters } from "../modules/team/team.route";
import { AuthRouter } from "../modules/auth/auth.route";
const router = express.Router();

// all module route is here
const AllModuleRoutes = [
  { path: "/user", router: UserRoutes },
  { path: "/auth", router: AuthRouter },
  { path: "/team", router: TeamRouters },
];

AllModuleRoutes.forEach((route) => router.use(route.path, route.router));

export const RootRoutes = router;
