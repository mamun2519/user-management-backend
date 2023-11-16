import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUserFromDB = async (data: IUser): Promise<IUser> => {
  const user = await User.create(data);
  return user;
};

const getAllUserFromDB = async (): Promise<IUser[]> => {
  const user = await User.find({});
  return user;
};

export const UserService = {
  createUserFromDB,
  getAllUserFromDB,
};
