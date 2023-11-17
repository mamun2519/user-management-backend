import { Request, Response } from "express";
import catchAsyncFn from "../../../utils/catchAsynFn";
import sendApiResponse from "../../../utils/apiResponse";
import { StatusCodes } from "http-status-codes";

const signUpUser = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await AuthService.signUpUserFromDB(req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "user singUp successfully",
    data: result,
  });
});

export const AuthController = {
  signUpUser,
};
