"use client";

import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import {
  changePasswordService,
  getProfileService,
  updateProfileService,
} from "@/services/profile.service";

export const useProfile =
  () => {
    return useQuery({
      queryKey: ["profile"],

      queryFn:
        getProfileService,
    });
  };

export const useUpdateProfile =
  () => {
    return useMutation({
      mutationFn:
        updateProfileService,
    });
  };

export const useChangePassword =
  () => {
    return useMutation({
      mutationFn:
        changePasswordService,
    });
  };