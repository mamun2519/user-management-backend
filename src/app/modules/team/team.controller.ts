import { Request, Response } from "express";
import catchAsyncFn from "../../../utils/catchAsynFn";
import sendApiResponse from "../../../utils/apiResponse";
import { StatusCodes } from "http-status-codes";
import { JwtPayload } from "jsonwebtoken";
import { TeamService } from "./team.services";

const createTeam = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await TeamService.createTeamFromDB(req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "team create successfully",
    data: result,
  });
});

const myTeam = catchAsyncFn(async (req: Request, res: Response) => {
  const user = req.user as JwtPayload;
  const result = await TeamService.myTeamFromDB(user.userId as string);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "my team Fetch successfully",
    data: result,
  });
});
const deleteTeam = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await TeamService.deleteTeamFromDB(req.params.id);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "deleteTeam successfully",
    data: result,
  });
});

export const TeamController = {
  createTeam,
  myTeam,
  deleteTeam,
};
