import {
  Request,
  Response,
} from "express";

import {
  createComplaintService,
  deleteComplaintService,
  getComplaintDetailService,
  getComplaintsService,
  updateComplaintService,
} from "@/services/complaint.service";

import {
  errorResponse,
  successResponse,
} from "@/utils/response";

export const createComplaintController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const image =
        req.file?.filename;

      const result =
        await createComplaintService(
          req.body,
          req.user!.userId,
          image
        );

      return successResponse(
        res,
        "Complaint created",
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

export const getComplaintsController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const page = Number(
        req.query.page
      );

      const limit = Number(
        req.query.limit
      );

      const skip = Number(
        req.query.skip
      );

      const search =
        req.query.search as
          | string
          | undefined;

      const status =
        req.query.status as
          | string
          | undefined;

      const result =
        await getComplaintsService(
          page,
          limit,
          skip,
          search,
          status
        );

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

export const updateComplaintController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const result =
        await updateComplaintService(
          String(req.params.id),
          req.body,
          req.user!.userId
        );

      return successResponse(
        res,
        "Complaint updated",
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

export const deleteComplaintController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const result =
        await deleteComplaintService(
          String(req.params.id),
          req.user!.userId
        );

      return successResponse(
        res,
        "Complaint deleted",
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