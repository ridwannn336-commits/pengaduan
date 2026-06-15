import axiosInstance from "@/lib/axios";

import { API_ENDPOINT } from "@/constants/api.constant";

import {
  ComplaintResponse,
  CreateComplaintPayload,
} from "@/types/complaint.type";

export const getComplaintsService =
  async () => {
    const response =
      await axiosInstance.get(
        API_ENDPOINT.COMPLAINTS
      );

    return response.data;
  };

  export const getMyComplaintsService =
  async () => {

    const response =
      await axiosInstance.get(
        "/complaints/my"
      );

    return response.data.data;

  };

export const getAllComplaints =
  async () => {
    const response =
      await axiosInstance.get(
        API_ENDPOINT.COMPLAINTS
      );

    // support berbagai struktur response backend
    return (
      response.data.data?.data ||
      response.data.data ||
      response.data
    );
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
  export const getComplaintDetail =
  async (
    id: string
  ) => {

    const response =
      await axiosInstance.get(
        `/complaints/${id}`
      );

    return (
      response.data.data ||
      response.data
    );

  };
  export const getComplaintDetailService =
  async (
    id: string
  ) => {

    const response =
      await axiosInstance.get(
        `/complaints/${id}`
      );

    return response.data;

  };

  export const deleteComplaintService =
  async (
    id: string
  ) => {

    const response =
      await axiosInstance.delete(
        `/complaints/${id}`
      );

    return response.data;

  };
  export const getMyStatsService =
  async () => {

    const response =
      await axiosInstance.get(
        "/complaints/my-stats"
      );

    return response.data.data;

  };
  export const updateComplaintService =
  async (
    id: string,
    data: FormData
  ) => {

    const response =
      await axiosInstance.put(
        `/complaints/${id}`,
        data,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

    return response.data;

  };