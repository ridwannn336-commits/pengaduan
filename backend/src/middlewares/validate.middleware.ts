import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";

import { errorResponse } from "@/utils/response";

export const validate =
  (schema: ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      return errorResponse(res, result.error.issues[0].message, 400);
    }

    next();
  };