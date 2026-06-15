import {
  Request,
  Response,
} from "express";

import {
  createComplaintService,
  deleteComplaintService,
  getComplaintDetailService,
  getComplaintsService,
   getMyComplaintsService,
  updateComplaintService,
} from "@/services/complaint.service";

import {
  errorResponse,
  successResponse,
} from "@/utils/response";

import { prisma } from "@/config/prisma";

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
      const page = Number(req.query.page) || 1;

      const limit = Number(req.query.limit) || 10;

      const skip = (page - 1) * limit;
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
  export const getComplaintDetailController =
  async (
    req: Request,
    res: Response
  ) => {
    try {

      const result =
        await getComplaintDetailService(
          String(req.params.id)
        );

      return successResponse(
        res,
        "Complaint detail fetched",
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
      const image =
        req.file?.filename;

      const result =
        await updateComplaintService(
          String(req.params.id),
          req.body,
          req.user!.userId,
          image
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

export const getMyComplaintsController =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const complaints =
        await getMyComplaintsService(
          req.user!.userId
        );

      return res.status(200).json({
        success: true,
        data: complaints,
      });

    } catch (error) {

      return res.status(500).json({
        success: false,
        message:
          "Failed to get complaints",
      });

    }

  };

  export const getMyStatsController =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const userId =
        req.user!.userId;

      const total =
        await prisma.complaint.count({
          where: {
            userId,
          },
        });

      const pending =
        await prisma.complaint.count({
          where: {
            userId,
            status: "PENDING",
          },
        });

      const process =
        await prisma.complaint.count({
          where: {
            userId,
            status: "PROCESS",
          },
        });

      const completed =
        await prisma.complaint.count({
          where: {
            userId,
            status: "COMPLETED",
          },
        });

      const rejected =
        await prisma.complaint.count({
          where: {
            userId,
            status: "REJECTED",
          },
        });

      return res.status(200).json({
        success: true,
        data: {
          total,
          pending,
          process,
          completed,
          rejected,
        },
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({
        success: false,
        message: "Failed to get stats",
      });

    }

  };