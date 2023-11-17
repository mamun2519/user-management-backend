import { StatusCodes } from "http-status-codes";
import API_Error from "../../../errors/appError";
import { IUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { jwtHelpers } from "../../../utils/jwtToken";
import config from "../../../config";
import { Secret } from "jsonwebtoken";

export const signUpUserFromDB = async (
  data: IUser
): Promise<{ user: IUser; accessToken: string }> => {
  const isExistUser = await User.findOne({ email: data.email });
  if (isExistUser) {
    throw new API_Error(StatusCodes.BAD_REQUEST, "User Already exist");
  }
  const createUser = await User.create(data);
  // generate access token
  const accessToken = jwtHelpers.createToken(
    { userId: createUser._id },
    config.jwt.secret_token as Secret,
    config.jwt.expire_in as string
  );
  return {
    user: createUser,
    accessToken,
  };
};
export const loginUserFromDb = async (
  data: IUser
): Promise<{ user: IUser; accessToken: string }> => {
  const isExistUser = await User.findOne({ email: data.email });
  if (!isExistUser) {
    throw new API_Error(StatusCodes.BAD_REQUEST, "User Not Found");
  }
  if (isExistUser.password !== data.password) {
    throw new API_Error(StatusCodes.BAD_REQUEST, "Password Incorrect");
  }
  // generate access token
  const accessToken = jwtHelpers.createToken(
    { userId: isExistUser._id },
    config.jwt.secret_token as Secret,
    config.jwt.expire_in as string
  );
  return {
    user: isExistUser,
    accessToken,
  };
};

export const AuthService = {
  signUpUserFromDB,
};
