import { Model } from "mongoose";
// user interface
export type IUser = {
  first_name: string;
  last_name: string;
  gender: "Male" | "Female" | "Others";
  avatar: string;
  email: string;
  domain: string;
  password: string;
  available: boolean;
};
export type UserModel = Model<IUser, Record<string, unknown>>;
// user filters
export type IUserFilters = {
  searchTerm: string;
  domain: string;
  gender: string;
  available: boolean;
};
