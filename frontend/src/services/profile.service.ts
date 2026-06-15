import axiosInstance from "@/lib/axios";

import {
  ChangePasswordPayload,
  UpdateProfilePayload,
} from "@/types/profile.type";

export const getProfile = async () => {
  const response = await axiosInstance.get(
    "/profile"
  );

  return response.data.data;
};

export const updateProfile = async (
  data: UpdateProfilePayload
) => {
  const response =
    await axiosInstance.put(
      "/profile",
      data
    );

  return response.data.data;
};

export const changePassword =
  async (
    data: ChangePasswordPayload
  ) => {
    const response =
      await axiosInstance.put(
        "/profile/change-password",
        data
      );

    return response.data.data;
  };