import {
  Request,
  Response,
} from "express";

import {
  getAllComplaintsAdminService,
  getAllUsersService,
  getDashboardStatsService,
  updateComplaintStatusService,
} from "@/services/admin.service";

import {
  errorResponse,
  successResponse,
} from "@/utils/response";

export const getDashboardStatsController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const result =
        await getDashboardStatsService();

      return successResponse(
        res,
        "Dashboard stats fetched",
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

export const getAllUsersController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const result =
        await getAllUsersService();

      return successResponse(
        res,
        "Users fetched",
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

export const getAllComplaintsAdminController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const result =
        await getAllComplaintsAdminService();

      return successResponse(
        res,
        "Complaints fetched",
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

export const updateComplaintStatusController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const result =
        await updateComplaintStatusService(
          String(req.params.id),
          req.body
        );

      return successResponse(
        res,
        "Complaint status updated",
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