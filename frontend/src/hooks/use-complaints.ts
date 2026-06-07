"use client";

import {
  useMutation,
  useQuery,
} from "@tanstack/react-query";

import {
  createComplaintService,
  getComplaintsService,
} from "@/services/complaint.service";

export const useComplaints =
  () => {
    return useQuery({
      queryKey: ["complaints"],

      queryFn:
        getComplaintsService,

      staleTime:
        1000 * 60 * 5,

      refetchOnWindowFocus:
        false,
    });
  };
  
export const useCreateComplaint =
  () => {
    return useMutation({
      mutationFn:
        createComplaintService,
    });
  };