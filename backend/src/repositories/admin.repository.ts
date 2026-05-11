import { prisma } from "@/config/prisma";

import { UpdateComplaintStatusPayload } from "@/types/admin.type";

export const getDashboardStats =
  async () => {
    const totalUsers =
      await prisma.user.count();

    const totalComplaints =
      await prisma.complaint.count();

    const pendingComplaints =
      await prisma.complaint.count({
        where: {
          status: "PENDING",
        },
      });

    const completedComplaints =
      await prisma.complaint.count({
        where: {
          status: "COMPLETED",
        },
      });

    return {
      totalUsers,
      totalComplaints,
      pendingComplaints,
      completedComplaints,
    };
  };

export const getAllUsers =
  async () => {
    return prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  };

export const getAllComplaintsAdmin =
  async () => {
    return prisma.complaint.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },

      orderBy: {
        createdAt: "desc",
      },
    });
  };

export const updateComplaintStatus =
  async (
    id: string,
    payload: UpdateComplaintStatusPayload
  ) => {
    return prisma.complaint.update({
      where: {
        id,
      },

      data: {
        status: payload.status,
        adminResponse:
          payload.adminResponse,
      },
    });
  };