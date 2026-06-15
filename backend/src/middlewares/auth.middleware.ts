import {
  Request,
  Response,
  NextFunction,
} from "express";

import { verifyToken } from "@/utils/jwt";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(
      "Authorization Header:",
      req.headers.authorization
    );

    const bearerToken =
      req.headers.authorization;

    if (!bearerToken) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token =
      bearerToken.split(" ")[1];

    console.log("TOKEN =", token);

    const decoded =
      verifyToken(token);

    console.log(
      "DECODED =",
      decoded
    );

    req.user = decoded as any;

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }
};