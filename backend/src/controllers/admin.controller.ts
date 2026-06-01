import { Request, Response } from "express";

import { prisma } from "@/config/prisma";

export const getDashboardStatsController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const total =
        await prisma.complaint.count();

      const pending =
        await prisma.complaint.count(
          {
            where: {
              status:
                "PENDING",
            },
          }
        );

      const process =
        await prisma.complaint.count(
          {
            where: {
              status:
                "PROCESS",
            },
          }
        );

      const completed =
        await prisma.complaint.count(
          {
            where: {
              status:
                "COMPLETED",
            },
          }
        );

      const rejected =
        await prisma.complaint.count(
          {
            where: {
              status:
                "REJECTED",
            },
          }
        );

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
        message:
          "Failed to get dashboard stats",
      });
    }
  };

export const getAllComplaintsController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const complaints =
        await prisma.complaint.findMany(
          {
            include: {
              user: true,
            },

            orderBy: {
              createdAt:
                "desc",
            },
          }
        );

      return res.status(200).json({
        success: true,
        data: complaints,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
        message:
          "Failed to get complaints",
      });
    }
  };

export const updateComplaintStatusController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const id = String(
        req.params.id
      );

      const {
        status,
        adminResponse,
      } = req.body;

      const complaint =
        await prisma.complaint.update(
          {
            where: {
              id,
            },

            data: {
              status,
              adminResponse,
            },
          }
        );

      return res.status(200).json({
        success: true,
        message:
          "Complaint updated successfully",
        data: complaint,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
        message:
          "Failed to update complaint",
      });
    }
  };