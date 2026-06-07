import { axiosInstance } from "@/lib/axios";

import {
  ChangePasswordPayload,
  ProfileResponse,
  UpdateProfilePayload,
} from "@/types/profile.type";

export const getProfileService =
  async () => {
    const response =
      await axiosInstance.get<ProfileResponse>(
        "/profile"
      );

    return response.data;
  };

export const updateProfileService =
  async (
    payload: UpdateProfilePayload
  ) => {
    const response =
      await axiosInstance.put(
        "/profile",
        payload
      );

    return response.data;
  };

export const changePasswordService =
  async (
    payload: ChangePasswordPayload
  ) => {
    const response =
      await axiosInstance.patch(
        "/profile/change-password",
        payload
      );

    return response.data;
  };