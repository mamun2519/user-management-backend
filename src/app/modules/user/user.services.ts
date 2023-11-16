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
const getSingleUserByIdFromDB = async (id: string): Promise<IUser | null> => {
  const user = await User.findById(id);
  return user;
};
const updateUserByIdFromDB = async (
  id: string,
  payload: Partial<IUser>
): Promise<IUser | null> => {
  const user = await User.findByIdAndUpdate(id, payload, { new: true });
  return user;
};

const deleteUserByIdFromDB = async (id: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(id);
};
export const UserService = {
  createUserFromDB,
  getAllUserFromDB,
  getSingleUserByIdFromDB,
  updateUserByIdFromDB,
  deleteUserByIdFromDB,
};
