import { Schema, model } from "mongoose";

import { ITeam, TeamModel } from "./team.interface";
// team Schema
export const UserTeam = new Schema<ITeam, TeamModel>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    teamMember: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

// Team Model
export const User = model<ITeam, TeamModel>("Team", UserTeam);
