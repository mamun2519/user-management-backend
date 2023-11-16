import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUserFromDB = async (data: IUser): Promise<IUser> => {
  const user = await User.create(data);
  return user;
};

export const UserService = {
  createUserFromDB,
};
