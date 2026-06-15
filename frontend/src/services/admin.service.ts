import axiosInstance from "@/lib/axios";

export const getDashboardStats = async () => {
  const response = await axiosInstance.get(
    "/admin/dashboard"
  );

  return response.data.data;
};

export const getAllComplaints = async () => {
  const response = await axiosInstance.get(
    "/admin/complaints"
  );

  return response.data.data;
};

export const getComplaintAnalytics = async () => {
  const response = await axiosInstance.get(
    "/admin/analytics"
  );

  return response.data.data;
};

export const getAllUsers = async () => {
  const response = await axiosInstance.get(
    "/admin/users"
  );

  return response.data.data;
};

export const updateComplaintStatus = async (
  id: string,
  data: {
    status: string;
    adminResponse?: string;
  }
) => {
  const response = await axiosInstance.patch(
    `/admin/complaints/${id}`,
    data
  );

  return response.data.data;
};