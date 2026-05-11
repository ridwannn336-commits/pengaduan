import { prisma } from "@/config/prisma";

import {
  CreateComplaintPayload,
  UpdateComplaintPayload,
} from "@/types/complaint.type";

export const createComplaint =
  async (
    payload: CreateComplaintPayload,
    userId: string,
    image?: string
  ) => {
    return prisma.complaint.create({
      data: {
        title: payload.title,
        description:
          payload.description,
        image,
        userId,
      },
    });
  };

export const getComplaints =
  async (
    page: number,
    limit: number,
    skip: number,
    search?: string,
    status?: string
  ) => {
    return prisma.complaint.findMany({
      where: {
        AND: [
          search
            ? {
                OR: [
                  {
                    title: {
                      contains:
                        search,
                    },
                  },

                  {
                    description:
                      {
                        contains:
                          search,
                      },
                  },
                ],
              }
            : {},

          status
            ? {
                status:
                  status as any,
              }
            : {},
        ],
      },

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

      skip,

      take: limit,
    });
  };
  
export const getComplaintById =
  async (id: string) => {
    return prisma.complaint.findUnique({
      where: {
        id,
      },

      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  };

export const updateComplaint =
  async (
    id: string,
    payload: UpdateComplaintPayload
  ) => {
    return prisma.complaint.update({
      where: {
        id,
      },

      data: payload,
    });
  };

export const deleteComplaint =
  async (id: string) => {
    return prisma.complaint.delete({
      where: {
        id,
      },
    });
  };