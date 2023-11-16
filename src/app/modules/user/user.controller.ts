import { Request, Response } from "express";
import catchAsyncFn from "../../../utils/catchAsynFn";
import sendApiResponse from "../../../utils/apiResponse";
import { StatusCodes } from "http-status-codes";
import { UserService } from "./user.services";

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
  const result = await UserService.getAllUserFromDB();
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "user fetch successfully",
    data: result,
  });
});

const getSingleUserById = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await UserService.getSingleUserByIdFromDB(req.params.id);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "user fetch successfully",
    data: result,
  });
});

const updateUserById = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await UserService.updateUserByIdFromDB(
    req.params.id,
    req.body
  );
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "user update successfully",
    data: result,
  });
});

const deleteUserById = catchAsyncFn(async (req: Request, res: Response) => {
  const result = await UserService.deleteUserByIdFromDB(req.params.id);
  sendApiResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "user delete successfully",
    data: result,
  });
});

export const UserController = {
  getAllUser,
  getSingleUserById,
  updateUserById,
  deleteUserById,
  createUser,
};
