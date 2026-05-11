import {
  createComplaint,
  deleteComplaint,
  getComplaintById,
  getComplaints,
  updateComplaint,
} from "@/repositories/complaint.repository";

import {
  CreateComplaintPayload,
  UpdateComplaintPayload,
} from "@/types/complaint.type";

export const createComplaintService =
  async (
    payload: CreateComplaintPayload,
    userId: string,
    image?: string
  ) => {
    return createComplaint(
      payload,
      userId,
      image
    );
  };

export const getComplaintsService =
  async (
    page: number,
    limit: number,
    skip: number,
    search?: string,
    status?: string
  ) => {
    return getComplaints(
      page,
      limit,
      skip,
      search,
      status
    );
  };

export const getComplaintDetailService =
  async (id: string) => {
    const complaint =
      await getComplaintById(id);

    if (!complaint) {
      throw new Error(
        "Complaint not found"
      );
    }

    return complaint;
  };

export const updateComplaintService =
  async (
    id: string,
    payload: UpdateComplaintPayload,
    userId: string
  ) => {
    const complaint =
      await getComplaintById(id);

    if (!complaint) {
      throw new Error(
        "Complaint not found"
      );
    }

    if (
      complaint.userId !== userId
    ) {
      throw new Error(
        "Forbidden access"
      );
    }

    return updateComplaint(
      id,
      payload
    );
  };

export const deleteComplaintService =
  async (
    id: string,
    userId: string
  ) => {
    const complaint =
      await getComplaintById(id);

    if (!complaint) {
      throw new Error(
        "Complaint not found"
      );
    }

    if (
      complaint.userId !== userId
    ) {
      throw new Error(
        "Forbidden access"
      );
    }

    return deleteComplaint(id);
  };