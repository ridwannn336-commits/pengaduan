"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import {
  changePassword,
  getProfile,
  updateProfile,
} from "@/services/profile.service";
import { ChangePasswordPayload } from "@/types/profile.type";

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
};

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: updateProfile,
  });
};

export const useChangePassword = () => {
  return useMutation({
    mutationFn: (values: ChangePasswordPayload) => changePassword(values),
  });
};