import {
  NextFunction,
  Request,
  Response,
} from "express";

import { errorResponse } from "@/utils/response";

export const adminMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.user?.role !== "ADMIN") {
    return errorResponse(
      res,
      "Forbidden access",
      403
    );
  }

  next();
};