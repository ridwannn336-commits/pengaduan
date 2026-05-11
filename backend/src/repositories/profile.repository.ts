import { prisma } from "@/config/prisma";

import {
  ChangePasswordPayload,
  UpdateProfilePayload,
} from "@/types/profile.type";

export const getProfile =
  async (userId: string) => {
    return prisma.user.findUnique({
      where: {
        id: userId,
      },

      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
  };

export const updateProfile =
  async (
    userId: string,
    payload: UpdateProfilePayload
  ) => {
    return prisma.user.update({
      where: {
        id: userId,
      },

      data: payload,

      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });
  };

export const updatePassword =
  async (
    userId: string,
    hashedPassword: string
  ) => {
    return prisma.user.update({
      where: {
        id: userId,
      },

      data: {
        password:
          hashedPassword,
      },
    });
  };