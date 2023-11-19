import { SortOrder } from "mongoose";
import { IPaginationOptions } from "../../../interface/pagination";
import { PaginationHelper } from "../../../utils/paginationHalper";
import { UserSearchAbleFiled } from "./user.constant";
import { IUser, IUserFilters } from "./user.interface";
import { User } from "./user.model";
import { IGenericResponse } from "../../../interface/common";

const createUserFromDB = async (data: IUser): Promise<IUser> => {
  const user = await User.create(data);
  return user;
};

const getAllUserFromDB = async (
  filter: IUserFilters,
  pagination: IPaginationOptions
): Promise<IGenericResponse<any>> => {
  const { page, limit, skip, sortBy, sortOrder } =
    PaginationHelper.calculatePagination(pagination);
  const { searchTerm, ...filtersData } = filter;

  console.log("filterData", filtersData);
  const andConditions = [];
  // Searching
  if (searchTerm) {
    andConditions.push({
      $or: UserSearchAbleFiled.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  // FILTERING
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filter).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }
  console.log(andConditions[0]);
  // Sorting
  const sortCondition: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortCondition[sortBy] = sortOrder;
  }

  // where conditions
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const user = await User.find(whereConditions).skip(skip).limit(limit);
  const total = await User.countDocuments(whereConditions);
  const category = await User.distinct("domain");
  const domain = category.map((title: string) => {
    return {
      title,
    };
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: {
      user,
      domain,
    },
  };
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
