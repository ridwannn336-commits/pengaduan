import axiosInstance from "@/lib/axios";

import { API_ENDPOINT } from "@/constants/api.constant";

import {
  ComplaintResponse,
  CreateComplaintPayload,
} from "@/types/complaint.type";

export const getComplaintsService =
  async () => {
    const response =
      await axiosInstance.get<ComplaintResponse>(
        API_ENDPOINT.COMPLAINTS
      );

    return response.data;
  };

export const createComplaintService =
  async (
    payload: CreateComplaintPayload
  ) => {
    const formData =
      new FormData();

    formData.append(
      "title",
      payload.title
    );

    formData.append(
      "description",
      payload.description
    );

    if (payload.image?.[0]) {
      formData.append(
        "image",
        payload.image[0]
      );
    }

    const response =
      await axiosInstance.post(
        API_ENDPOINT.COMPLAINTS,
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;
  };