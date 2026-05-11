import {
  getProfile,
  updatePassword,
  updateProfile,
} from "@/repositories/profile.repository";

import { findUserByEmail } from "@/repositories/auth.repository";

import {
  ChangePasswordPayload,
  UpdateProfilePayload,
} from "@/types/profile.type";

import {
  comparePassword,
  hashPassword,
} from "@/utils/hash";

export const getProfileService =
  async (userId: string) => {
    const user =
      await getProfile(userId);

    if (!user) {
      throw new Error(
        "User not found"
      );
    }

    return user;
  };

export const updateProfileService =
  async (
    userId: string,
    payload: UpdateProfilePayload
  ) => {
    if (payload.email) {
      const existingUser =
        await findUserByEmail(
          payload.email
        );

      if (
        existingUser &&
        existingUser.id !== userId
      ) {
        throw new Error(
          "Email already exists"
        );
      }
    }

    return updateProfile(
      userId,
      payload
    );
  };

export const changePasswordService =
  async (
    userId: string,
    payload: ChangePasswordPayload
  ) => {
    const user =
      await findUserByEmail(
        (
          await getProfile(userId)
        )!.email
      );

    if (!user) {
      throw new Error(
        "User not found"
      );
    }

    const isPasswordValid =
      await comparePassword(
        payload.currentPassword,
        user.password
      );

    if (!isPasswordValid) {
      throw new Error(
        "Current password invalid"
      );
    }

    const hashedPassword =
      await hashPassword(
        payload.newPassword
      );

    await updatePassword(
      userId,
      hashedPassword
    );

    return {
      message:
        "Password updated successfully",
    };
  };