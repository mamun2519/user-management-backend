import mongoose from "mongoose";

import { IGenericErrorMessage } from "../interface/error";
import { IGenericErrorResponse } from "../interface/common";

const handleValidationError = (
  error: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(error.errors).map(
    (element) => {
      return {
        path: element?.path,
        message: element?.message,
      };
    }
  );

  const statusCode = 400;
  return {
    statusCode,
    message: "Validation Error",
    errorMessages: errors,
  };
  //   const statusCode = 400
  //   return errors
};

export default handleValidationError;
