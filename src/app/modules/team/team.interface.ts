import { Model, Types } from "mongoose";
import { IUser } from "../user/user.interface";

export type ITeam = {
  userId: Types.ObjectId | IUser;
  teamMember: Types.ObjectId | IUser;
};

export type TeamModel = Model<ITeam, Record<string, unknown>>;
