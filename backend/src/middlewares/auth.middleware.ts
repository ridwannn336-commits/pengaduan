import {
  NextFunction,
  Request,
  Response,
} from "express";

import { verifyToken } from "@/utils/jwt";

import { errorResponse } from "@/utils/response";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const bearerToken =
      req.headers.authorization;

    if (!bearerToken) {
      return errorResponse(
        res,
        "Unauthorized",
        401
      );
    }

    const token =
      bearerToken.split(" ")[1];

    const decoded = verifyToken(token) as {
      userId: string;
      role: "USER" | "ADMIN";
    };

    req.user = decoded;

    next();
  } catch (error) {
    return errorResponse(
      res,
      "Unauthorized",
      401
    );
  }
};