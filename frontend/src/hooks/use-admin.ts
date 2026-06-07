"use client";

import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import {
  getComplaintsAdminService,
  getDashboardStatsService,
  getUsersService,
  updateComplaintStatusService,
} from "@/services/admin.service";

export const useDashboardStats =
  () => {
    return useQuery({
      queryKey: [
        "dashboard-stats",
      ],

      queryFn:
        getDashboardStatsService,
    });
  };

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],

    queryFn: getUsersService,
  });
};

export const useComplaintsAdmin =
  () => {
    return useQuery({
      queryKey: [
        "admin-complaints",
      ],

      queryFn:
        getComplaintsAdminService,
    });
  };

export const useUpdateComplaintStatus =
  () => {
    return useMutation({
      mutationFn:
        ({
          id,
          payload,
        }: {
          id: string;
          payload: {
            status:
              | "PENDING"
              | "PROCESS"
              | "COMPLETED"
              | "REJECTED";

            adminResponse?: string;
          };
        }) =>
          updateComplaintStatusService(
            id,
            payload
          ),
    });
  };