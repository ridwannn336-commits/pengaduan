import axios from "axios";

import { getToken } from "./token";

const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL,

  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  }
);

export default axiosInstance;