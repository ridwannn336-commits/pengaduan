import axiosInstance from "@/lib/axios";

import { API_ENDPOINT } from "@/constants/api.constant";

import {
  AuthResponse,
  LoginPayload,
  RegisterPayload,
} from "@/types/auth.type";

export const loginService =
  async (
    payload: LoginPayload
  ) => {
    const response =
      await axiosInstance.post<AuthResponse>(
        API_ENDPOINT.LOGIN,
        payload
      );

    return response.data;
  };

export const registerService =
  async (
    payload: RegisterPayload
  ) => {
    const response =
      await axiosInstance.post<AuthResponse>(
        API_ENDPOINT.REGISTER,
        payload
      );

    return response.data;
  };