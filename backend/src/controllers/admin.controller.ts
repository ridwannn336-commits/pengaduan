import { Request, Response } from "express";

import { prisma } from "@/config/prisma";

export const getDashboardStatsController =
  async (
    req: Request,
    res: Response
  ) => {

    console.log("GET DASHBOARD");

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

        const totalUsers =
  await prisma.user.count();

      return res.status(200).json({
        success: true,

       data: {
      total,
      pending,
      process,
      completed,
      rejected,
      totalUsers,
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

    console.log("GET ADMIN COMPLAINT");
    
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
  export const getAllUsersController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const users =
        await prisma.user.findMany({
          include: {
            _count: {
              select: {
                complaints: true,
              },
            },
          },

          orderBy: {
            createdAt: "desc",
          },
        });

      return res.status(200).json({
        success: true,
        data: users,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
        message:
          "Failed to get users",
      });
    }
  };
  export const getComplaintAnalyticsController =
  async (
    req: Request,
    res: Response
  ) => {
    try {
      const analytics =
        await prisma.complaint.groupBy({
          by: ["status"],
          _count: {
            status: true,
          },
        });

      return res.status(200).json({
        success: true,
        data: analytics.map((item) => ({
          status: item.status,
          count: item._count.status,
        })),
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        success: false,
        message: "Failed to get analytics",
      });
    }
  };


  export const getPublicHomeController =
  async (
    req: Request,
    res: Response
  ) => {

    try {

      const total =
        await prisma.complaint.count();

      const completed =
        await prisma.complaint.count({
          where: {
            status: "COMPLETED",
          },
        });

      const totalUsers =
        await prisma.user.count();

      const complaints =
        await prisma.complaint.findMany({
          take: 3,
          orderBy: {
            createdAt: "desc",
          },
          include: {
            user: true,
          },
        });

      return res.status(200).json({
        success: true,
        data: {
          total,
          completed,
          totalUsers,
          complaints,
        },
      });

    } catch (error) {

      console.log(error);

      return res.status(500).json({
        success: false,
        message:
          "Failed to get home data",
      });

    }

  };
  