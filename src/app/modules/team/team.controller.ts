import { Request, Response } from "express";
import catchAsyncFn from "../../../utils/catchAsynFn";
import sendApiResponse from "../../../utils/apiResponse";
import { StatusCodes } from "http-status-codes";

const createTeam = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await TeamController.createTeamFromDB(req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "team create successfully",
    data: result,
  });
});

const allTeam = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await TeamController.allTeamFromDB();
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "team fetch successfully",
    data: result,
  });
});
const myTeam = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await TeamController.myTeamFromDB(req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "my team Fetch successfully",
    data: result,
  });
});
const deleteTeam = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await TeamController.deleteTeamFromDB(req.body);
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
  allTeam,
};
