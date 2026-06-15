import axiosInstance from "@/lib/axios";

export const getHomeData =
  async () => {

    const response =
      await axiosInstance.get(
        "/public/home"
      );

    return response.data.data;

  };