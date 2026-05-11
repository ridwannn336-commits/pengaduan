import {
  NextFunction,
  Request,
  Response,
} from "express";

export const queryMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const page = Number(
    req.query.page || 1
  );

  const limit = Number(
    req.query.limit || 10
  );

  const skip =
    (page - 1) * limit;

  req.query.page =
    String(page);

  req.query.limit =
    String(limit);

  req.query.skip =
    String(skip);

  next();
};