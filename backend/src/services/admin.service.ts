import {
  getAllComplaintsAdmin,
  getAllUsers,
  getDashboardStats,
  updateComplaintStatus,
} from "@/repositories/admin.repository";

import { getComplaintById } from "@/repositories/complaint.repository";

import { UpdateComplaintStatusPayload } from "@/types/admin.type";

export const getDashboardStatsService =
  async () => {
    return getDashboardStats();
  };

export const getAllUsersService =
  async () => {
    return getAllUsers();
  };

export const getAllComplaintsAdminService =
  async () => {
    return getAllComplaintsAdmin();
  };

export const updateComplaintStatusService =
  async (
    id: string,
    payload: UpdateComplaintStatusPayload
  ) => {
    const complaint =
      await getComplaintById(id);

    if (!complaint) {
      throw new Error(
        "Complaint not found"
      );
    }

    return updateComplaintStatus(
      id,
      payload
    );
  };