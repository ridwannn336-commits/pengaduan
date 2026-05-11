import { Request, Response } from "express";

import { MESSAGE } from "@/constants/message.constant";

import {
  loginService,
  registerService,
} from "@/services/auth.service";

import {
  errorResponse,
  successResponse,
} from "@/utils/response";

export const registerController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await registerService(req.body);

    return successResponse(
      res,
      MESSAGE.REGISTER_SUCCESS,
      result,
      201
    );
  } catch (error) {
    return errorResponse(
      res,
      (error as Error).message,
      400
    );
  }
};

export const loginController = async (
  req: Request,
  res: Response
) => {
  try {
    const result = await loginService(req.body);

    return successResponse(
      res,
      MESSAGE.LOGIN_SUCCESS,
      result
    );
  } catch (error) {
    return errorResponse(
      res,
      (error as Error).message,
      400
    );
  }
};