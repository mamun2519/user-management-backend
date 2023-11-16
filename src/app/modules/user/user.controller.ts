import { Request, Response } from "express";
import catchAsyncFn from "../../../utils/catchAsynFn";
import sendApiResponse from "../../../utils/apiResponse";
import { StatusCodes } from "http-status-codes";

const createUser = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await UserService.createUserFromDB(req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "user create successfully",
    data: result,
  });
});
const getAllUser = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await UserService.getAllUserFromDB(req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "user create successfully",
    data: result,
  });
});

const getSingleUserById = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await UserService.getSingleUserByIdFromDB(req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "user create successfully",
    data: result,
  });
});

const createUser = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await UserService.createUserFromDB(req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "user create successfully",
    data: result,
  });
});

const createUser = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await UserService.createUserFromDB(req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "user create successfully",
    data: result,
  });
});

const createUser = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await UserService.createUserFromDB(req.body);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "user create successfully",
    data: result,
  });
});
