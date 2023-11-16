import { Schema, model } from "mongoose";
import { IUser, UserModel } from "./user.interface";
import { gender } from "./user.constant";
// User Schema
export const UserSchema = new Schema<IUser, UserModel>({
  first_name: {
    type: String,
    required: [true, "First Name Is Required"],
  },
  last_name: {
    type: String,
    required: [true, "Last Name Is Required"],
  },
  email: {
    type: String,
    required: [true, "Email Is Required"],
  },
  gender: {
    type: String,
    enum: gender,
    required: [true, "Gender Name Is Required"],
  },
  avatar: {
    type: String,
    required: [true, "Avatar Is Required"],
  },
  domain: {
    type: String,
    required: [true, "Domain Is Required"],
  },
  available: {
    type: Boolean,
    required: [true, "Available Is Required"],
  },
});

// User Model
export const User = model<IUser, UserModel>("User", UserSchema);
