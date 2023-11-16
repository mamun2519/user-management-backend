import { Model } from "mongoose";

export type IUser = {
  id: string;
  first_name: string;
  last_name: string;
  gender: "Male" | "Female" | "Others";
  avatar: string;
  domain: string;
  available: boolean;
};
export type User = Model<IUser, Record<string, unknown>>;

export type IUserFilters = {
  searchTerm: string;
  domain: string;
  gender: string;
  available: string;
};
