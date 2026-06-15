import {
  Request,
  Response,
} from "express";

import {
  changePasswordService,
  getProfileService,
  updateProfileService,
} from "@/services/profile.service";

import {
  errorResponse,
  successResponse,
} from "@/utils/response";

export const getProfileController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const result =
        await getProfileService(
          req.user!.userId
        );

      return successResponse(
        res,
        "Profile fetched",
        result
      );
    } catch (error) {
      return errorResponse(
        res,
        (error as Error).message,
        404
      );
    }
  };

export const updateProfileController =
  async (
    req: Request,
    res: Response
  ) => {
    try {

      const result =
        await updateProfileService(
          req.user!.userId,
          req.body
        );

      return successResponse(
        res,
        "Profile updated",
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

export const changePasswordController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const result =
        await changePasswordService(
          req.user!.userId,
          req.body
        );

      return successResponse(
        res,
        "Password updated",
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
  